"use strict";


const acc = document.getElementsByClassName("question");

let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    let hidden = this.nextElementSibling;
    if (hidden.style.display === "block") {
      hidden.style.display = "none";
    } else {
      hidden.style.display = "block";
    }
  });
}
