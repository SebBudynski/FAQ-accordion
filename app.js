"use strict";



const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");


one.addEventListener("click", () => {
  this.classList.toggle("hidden");
});
two.addEventListener("click", () => {
  document.querySelector(".paragraph-2").classList.toggle("hidden");
  ;
});
three.addEventListener("click", () => {
  document.querySelector(".paragraph-3").classList.toggle("hidden");
  ;
});
four.addEventListener("click", () => {
  document.querySelector(".paragraph-4").classList.toggle("hidden");
  ;
});


