//? dashboard

// POST Links

let link = document.querySelector("#link");
let number = document.querySelector("#number");
let submit = document.querySelector("#submit");

let allData = [];

submit.addEventListener("click", (e) => {
  e.preventDefault();
  let links = { data: [number.value, link.value] };
  allData.push(links);
  localStorage.setItem("data", JSON.stringify(allData));
  console.log(allData);
});

let item = localStorage.getItem("data");

allData = JSON.parse(item);
console.log(allData);

// front

