const params = new URLSearchParams(window.location.search);
interface Movies {
  titlr: string;
  ganre: string;
  stock: number;
  rate: number;
  like: boolean;
}
const listcontainer: HTMLDivElement =
  document.querySelector("#list-container")!;
let movies = [
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
  { titlr: "asasin", ganre: "action", stock: 7, rate: 3.5 },
];
document.addEventListener("DOMContentLoaded", function () {
  for (let i = 0; i < movies.length; i++) {
    const box = document.createElement("div");
    box.classList.add(
      "w-[100%]",
      "min-h-[12%]",
      "border-2",
      "border-gray-300",
      "rounded-sm",
      "grid",
      "grid-cols-7"
    );
    listcontainer.appendChild(box);
  }
});
