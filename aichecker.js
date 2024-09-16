(async () => {
  const urlencoded = new URLSearchParams();
  urlencoded.append(
    "text",
    "I agree with it. Posting ChatGPT's content as their very own work fundamentally violates academic integrity, and students give a false idea of their statistics and abilities, sabotage the credibility of the tests. It's crucial for the students to engage with academic material, perform independent research, and express their knowledge."
  );
  urlencoded.append("lang", "en");

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
    },
    body: urlencoded,
    redirect: "follow",
  };

  fetch("https://www.scribbr.com/ai-detector.php", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
})();
