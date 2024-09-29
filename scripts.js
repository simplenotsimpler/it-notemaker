// console.log("hello from script");

// https://www.youtube.com/watch?v=18kROgRlRDQ
const osList = document.getElementById("os-list");
const JSONArrayString =
  '[{"name": "Windows 10 22H2", "id": "Win1022H2"}, {"name": "Windows 11 23H2", "id": "Win1123H2"}]';

const operatingSystems = JSON.parse(JSONArrayString);
operatingSystems.forEach((os) => {
  const option = document.createElement("option");
  option.value = os.id;
  option.textContent = os.name;
  osList.appendChild(option);
});
