"use strict";
const ticBtn = document.getElementById("tic__btn");

const oneItem = document.getElementById("one__item");
const twoItem = document.getElementById("two__item");
const thereeItem = document.getElementById("theree__item");
const fourItem = document.getElementById("four__item");

const singePlayer = document.getElementById("single__player");
const multiPlayer = document.getElementById("multi__player");

ticBtn.addEventListener("click", () => {
  twoItem.classList.remove("hidden");
  oneItem.classList.add("hidden");
});

singePlayer.addEventListener("click", () => {
  twoItem.classList.add("hidden");
  thereeItem.classList.remove("hidden");
});
multiPlayer.addEventListener("click", () => {
  fourItem.classList.remove("hidden");
  thereeItem.classList.add("hidden");
  twoItem.classList.add("hidden");
});
