// src/movies.ts
var params = new URLSearchParams(window.location.search);
var listcontainer = document.querySelector("#list-container");
var movies = [
  { titlr: "asasin", ganre: "action", stock: 7, rate: 3.5 },
  { titlr: "asasin", ganre: "action", stock: 7, rate: 3.5 },
  { titlr: "asasin", ganre: "action", stock: 7, rate: 3.5 },
  { titlr: "asasin", ganre: "action", stock: 7, rate: 3.5 },
  { titlr: "asasin", ganre: "action", stock: 7, rate: 3.5 },
  { titlr: "asasin", ganre: "action", stock: 7, rate: 3.5 },
  { titlr: "asasin", ganre: "action", stock: 7, rate: 3.5 },
  { titlr: "asasin", ganre: "action", stock: 7, rate: 3.5 },
  { titlr: "asasin", ganre: "action", stock: 7, rate: 3.5 },
  { titlr: "asasin", ganre: "action", stock: 7, rate: 3.5 },
  { titlr: "asasin", ganre: "action", stock: 7, rate: 3.5 },
  { titlr: "asasin", ganre: "action", stock: 7, rate: 3.5 }
];
document.addEventListener("DOMContentLoaded", function() {
  for (let i = 0;i < movies.length; i++) {
    const box = document.createElement("div");
    box.classList.add("w-[100%]", "min-h-[12%]", "border-2", "border-gray-300", "rounded-sm", "grid", "grid-cols-7");
    listcontainer.appendChild(box);
  }
});
