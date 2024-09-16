import axios from "axios";
import { load } from "cheerio";

var url =
  "https://pladrac.net/download?id=NDA1NTUy&title=The+Impossible+Heir+%282024%29+episode+8&typesub=SUB&mip=0.0.0.0&refer=none&op=1";
const capcha = async () => {
  const { data } = await axios(url, {
    headers: {
      Cookie:
        "_grecaptcha='09AH4jZCSgrBg-vcjmy0qGTK_N1zbBmQzf8yrHftmvS_O5JvjuUMd59O5jWqQnRrAHkyroMMqBtrhd_M1oHywExGz6xcyEOIyulyxfPg';",
    },
  });
  console.log(data);
};
capcha();
const getDownload = async () => {
  var url = "https://pladrac.net/download?";
  const { data } = await axios.post(
    url,
    {
      captcha_v2:
        "03AFcWeA4zUpZPLwKrKxMKKPNICUVTdbprSkVbsuEyNaxzbMUDdVawTIvHpqg043ds3StkLiz_iQKwIJ010LKw2QlihZa1ycZ3Omb2MMTk8fPy-wDqjJbkaORSeBU9hsZdWibDvQ6A9KMpFPAN6U7o-UJmNehR__iDs-Uv4JrREo13VNeaHRaDk-JhPi3bwxMWOBE63SxXSTD8mVBKIqhSTfPcLHh59Jx6hKSLzG_iM6ymqoV-MAStRzYqJyS2xZ_wNORBYQoc7GRLKVT3Brm6Hz6juR9mlFW_xBsIifGMNuPPujh2V3mA2RI9mCZYDrNLLmibfjpCj00jUcAag7SmMlCM92n3iRt3gNN4m3SJLPTIrF-tFjKjZQHZd6YeLzkgxFzA9iKZvkCWgRWqeUwE6ElFGXZPSs2XpGSVEEVWBBk81v4vPY30s5ldhue4eKqiYcV2ONubOeV-WalYLO7JJqdPYKHET_VgISnvnAV3GzvFsvykxclkmw5A7xuF2KsaW_fvTjxuQFIL3ioczE13i_a-2K6YXXdSDj6CoIoqNexWnWSowX2nXaLE8jp_N8cHY7xH5WTzOgcMCOATMd9X4QqhIfxh8-Kb9f8JQIKQY7vmxejnl-ceIEYigSlUO_aj9WWadZkQ9zwsLZRbABpTVBWVtgs9JV1EEtD-Aa4mZbKl1hHW9R8nGNI",
      id: "NDA1NTk0",
    },
    {
      method: "POST",
      headers: {
        "X-Requested-With": "XMLHttpRequest",
        Referer:
          "https://pladrac.net/download?id=NDA1NTk0&title=Legend+of+the+Hidden+Land+%282024%29+episode+6&typesub=RAW&mip=0.0.0.0&refer=none&op=1",
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
    }
  );
  console.log(data);
};
// getDownload();

// https://go.asicdn9.pro/go.php?url=aHR0cHM6LyAawehyfcghysfdsDGDYdgdsfsdfwstdgdsgtert9zdG9yYWdlLTY1LmNhc2ljZG45Lm5ld
// C9hc2lhbjQxNDYvNGU0MGYwMmZlZWQ3MTM4Y2I1ZmQxOTAyMWYzYWU2NDUvRVAuNi52MC4xNzEwOTcyMzExLjM2MHAubXA0P3Rva2VuPVFfOTRfbHczR0FGcnhfeklBQXo4SncmZXhwaXJlcz0xN
// zExODAzMjMyJmlkPTQwNTU5NCZ0aXRsZT0=

// https://go.asicdn9.pro/go.php?url=aHR0cHM6LyURASDGHUSRFSJGYfdsffsderFStewthsfSFtrftesdf9zdG9yYWdlLTY1LmNhc2ljZG45L
// m5ldC9hc2lhbjQxNDYvNGU0MGYwMmZlZWQ3MTM4Y2I1ZmQxOTAyMWYzYWU2NDUvRVAuNi52MC4xNzEwOTcyMzExLjQ4MHAubXA0P3Rva2VuPXd0TDJzS1Bsd0JHTHNaVHZ0WlpvSGcmZXhwaXJlc
// z0xNzExODAzMjMyJmlkPTQwNTU5NCZ0aXRsZT0=
