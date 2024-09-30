// console.log("hello from script");

// https://www.geeksforgeeks.org/read-json-file-using-javascript/
function fetchJSONData() {
  fetch("./db.json")
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => console.log(data))
    .catch((error) => console.error("Unable to fetch data:", error));
}
fetchJSONData();

// https://www.youtube.com/watch?v=18kROgRlRDQ
const osList = document.getElementById("os-list");
// TODO: fetch this from db.json
const JSONArrayString =
  '[{"name": "Windows 10 22H2", "id": "Win1022H2"}, {"name": "Windows 11 23H2", "id": "Win1123H2"}]';

const operatingSystems = JSON.parse(JSONArrayString);
operatingSystems.forEach((os) => {
  const option = document.createElement("option");
  option.value = os.id;
  option.textContent = os.name;
  osList.appendChild(option);
});

function fetchJSONData() {
  fetch("./db.json")
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => console.log(data))
    .catch((error) => console.error("Unable to fetch data:", error));
}
fetchJSONData();
