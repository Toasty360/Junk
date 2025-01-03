import axios from "axios";
import { load } from "cheerio";

const BASE_URL = "https://hdrezka.ag"; // Ensure this is defined
const COUNTRY_MAPPING = {
  "united states": "US",
  "united states of america": "US",
  usa: "US",
  сша: "US",
};

// Create a persistent axios instance with cookie jar
const createAxiosInstance = () => {
  const instance = axios.create({
    withCredentials: true,
    headers: {
      Accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
      "Accept-Language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      Referer: BASE_URL,
      Origin: BASE_URL,
      "Sec-Fetch-Dest": "document",
      "Sec-Fetch-Mode": "navigate",
      "Sec-Fetch-Site": "same-origin",
      "Sec-Fetch-User": "?1",
      "Upgrade-Insecure-Requests": "1",
    },
  });

  // Interceptor to log and handle cookies
  instance.interceptors.request.use(async (config) => {
    try {
      // Attempt to refresh cookies before critical requests
      if (config.url.includes("/ajax/get_cdn_series/")) {
        await refreshCookies(instance);
      }
    } catch (error) {
      console.error("Cookie refresh error:", error);
    }
    return config;
  });

  return instance;
};

// Function to refresh cookies
const refreshCookies = async (axiosInstance) => {
  try {
    // Make a request to the main page to get fresh cookies
    await axiosInstance.get(BASE_URL, {
      headers: {
        "Cache-Control": "no-cache",
        Pragma: "no-cache",
      },
    });
  } catch (error) {
    console.error("Failed to refresh cookies:", error);
    throw error;
  }
};
// Existing helper function for extracting favs value
const extractFavsValue = (html) => {
  const favsMatch = html.match(/ctrl_favs.*?value=['"](.*?)['"]/);
  return favsMatch?.[1] || null;
};

// Rest of your existing helper functions (getData, translateType, etc.) remain the same

/// title
///year
///type
export const getHDRezkaSource = async (
  title,
  year,
  type,
  season = null,
  episode = null,
  existingId = null,
  signal = null,
  originCountry = null
) => {
  // Create a new axios instance for each request
  const axiosInstance = createAxiosInstance();

  try {
    let bestMatchId = existingId;
    let favsValue = null;

    if (!bestMatchId) {
      const searchQuery = `${title} ${year}`;
      const searchUrl = `${BASE_URL}/search/?do=search&subaction=search&q=${encodeURIComponent(
        searchQuery
      )}`;
      console.log("Searching URL:", searchUrl);

      const searchResp = await axiosInstance.get(searchUrl, { signal });
      const $ = load(searchResp.data);

      // Extract favs value from the search response
      favsValue = extractFavsValue(searchResp.data);

      let bestMatch = null;
      let highestScore = 0;

      console.log("Processing search results...");

      $(".b-content__inline_item").each((_, elem) => {
        const $elem = $(elem);
        const itemData = {
          title: $elem.find(".b-content__inline_item-link a").text().trim(),
          info: $elem.find(".b-content__inline_item-link > div").text().trim(),
          type: $elem.find(".entity").text().trim(),
          id: $elem.attr("data-id"),
          dataUrl: $elem.attr("data-url").replace(/\.html$/, ""),
        };

        console.log("Item found:", itemData);

        let score = 0;
        let matchedCriteria = {
          year: false,
          type: false,
          country: false,
        };

        // Year matching (50 points)
        const foundYear = itemData.info.match(/\b(19|20)\d{2}\b/)?.[0];
        if (foundYear === year) {
          score += 50;
          matchedCriteria.year = true;
        }

        // Type matching (30 points)
        // const itemType = translateType(itemData.type);
        // const expectedType = type === "movie" ? "movie" : "tv";
        // if (
        //   itemType === expectedType ||
        //   (type === "movie" && itemType === "animation")
        // ) {
        //   score += 30;
        //   matchedCriteria.type = true;
        // }

        // Country matching for TV shows only (20 points)
        if (type === "tv" && originCountry) {
          const itemCountry = extractCountryFromInfo(itemData.info);
          if (itemCountry && originCountry.includes(itemCountry)) {
            score += 20;
            matchedCriteria.country = true;
          }
        }

        const criteriaCount =
          Object.values(matchedCriteria).filter(Boolean).length;

        if (
          criteriaCount > (bestMatch?.criteriaCount || 0) ||
          (criteriaCount === (bestMatch?.criteriaCount || 0) &&
            score > highestScore)
        ) {
          highestScore = score;
          bestMatch = {
            id: itemData.id,
            type: itemData.type,
            criteriaCount,
            score,
            dataUrl: itemData.dataUrl,
          };
        }
      });

      const minCriteria = type === "tv" ? 2 : 1;
      if (!bestMatch || bestMatch.criteriaCount < minCriteria) {
        throw new Error("Content not found");
      }

      bestMatchId = bestMatch.id;

      // If we don't have favsValue, fetch the page to get it
      if (!favsValue) {
        const pageResp = await axiosInstance.get(
          `${BASE_URL}/${bestMatch.dataUrl}`,
          { signal }
        );
        console.log(pageResp.headers);

        favsValue = extractFavsValue(pageResp.data);
      }
    }

    console.log(favsValue);

    // Add new required and optional parameters
    const params = {
      id: bestMatchId,
      translator_id: 238,
      is_director: 1,
      favs: favsValue,
      is_camrip: 0,
      is_ads: 0,
      ...(type === "movie"
        ? { action: "get_movie" }
        : {
            season: season || 1,
            episode: episode || 1,
            action: "get_stream",
          }),
    };

    const sourceUrl = `${BASE_URL}/ajax/get_cdn_series/?t=${Date.now()}`;
    console.log("Fetching source URL:", sourceUrl);

    // Attempt to refresh cookies before making the request
    await refreshCookies(axiosInstance);

    const sourceResp = await axiosInstance.post(
      sourceUrl,
      new URLSearchParams(params).toString(),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "X-Requested-With": "XMLHttpRequest",
        },
        signal: signal,
      }
    );

    if (!sourceResp.data.url) {
      console.error("No source URL found in response");
      throw new Error("No source URL found in response");
    }

    const sourceData = getData(sourceResp.data.url);
    console.log("Source data:", sourceData);

    return {
      sources: sourceData,
      thumbnails: sourceResp.data.thumbnails,
      subtitles: sourceResp.data.subtitle,
      bestMatchId: bestMatchId,
    };
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log("Request cancelled:", error.message);
      throw error;
    }

    console.error("HDRezka Error:", error);
    throw new Error(
      error.response
        ? `Error ${error.response.status}: ${error.response.statusText}`
        : error.message || "Failed to fetch source"
    );
  }
};

getHDRezkaSource("Requiem for a Dream", "2000", "Сериал");
