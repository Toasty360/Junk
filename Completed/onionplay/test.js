const getSource = () => {
  return fetch(
    "https://cdn-2.onionflux.com/FPT5meOOTnMwivIiSv9t0mYuhD2_S0qNVv0hsqY0eN1sIrUppckO8jtEDiSNUTm01NtrqWVZRdDOm7veFTzB7Q/sFI99ZFBKo4rwIAfakUa4PrtVSVnI6PBjvXOQKVXg5Q/video.m3u8",
    {
      headers: {
        Referer: "https://onionflux.com/",
      },
    }
  )
    .then((response) => {
      console.log(response.headers);

      return response.text();
    })
    .then((data) => console.log(data));
};

getSource();
