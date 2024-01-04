"use strict";

const acc = document.getElementsByClassName("question");

let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to change icon  'plus' to 'minus' */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    let hidden = this.nextElementSibling;
    hidden.classList.toggle("hidden");
  });
}
