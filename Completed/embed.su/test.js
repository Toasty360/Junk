(async () => {
  const resp = await (
    await fetch(
      "https://embed.su/api/proxy/viper/xornexstar38.xyz/file2/OyChGeFGeULqZJ9M+usCSEKPlV+3wTI3KVFumfYX9qutE3KHL4CT0F2LjXbCS~F+TlpZ+8ee1MD86bjyAhPksvrbX7slb7gSclDkMXzAsadXRh56RylfnnzbV~hN4MWEFOobl02V5KytTrJqwf3FKwQ06qBpcTe0htYG1V9XcSQ=/cGxheWxpc3QubTN1OA==.m3u8"
    )
  ).text();
  console.log(resp);
})();
