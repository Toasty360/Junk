import axios from "axios";
import fs from "fs";
const imgURL = "aHR0cHM6Ly9pbWcuaWNkbi5teS5pZA==",
  plyURL = "aHR0cHM6Ly92aWQudmlsb2FkLm9yZw==",
  items = 0;
let srv = 2,
  mid,
  eps;
async function fetchMoviesJSON(e, t, n) {
  const s = {
    method: t,
    body: JSON.stringify(n),
    headers: { Accept: "application/json", "Content-Type": "application/json" },
  };
  try {
    const t = await fetch(atob(e), s);
    return await t.json();
  } catch (e) {
    return e;
  }
}

const getval = async () => {
  const { data } = await axios.get(
    "https://ww1.new-movies123.co/user/servers/bNcAEpH4?ep=0"
  );
  console.log();
  const s =
    "function run(" + data.match(/eval\(function\((.*?)\}\)\)/)[1] + "})";
  var ext = eval(s.replace("}(", "}run("));
  fs.writeFileSync("./tmp/test.js", ext);

  try {
    // const newScript = "function run(" + s.split("function(")[1] + "}(";
    // console.log(eval(newScript));
  } catch (err) {
    console.log(err);
  }
};
getval();
