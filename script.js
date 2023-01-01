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

const cal1 = document.querySelector(".cal-1");
const cal2 = document.querySelector(".cal-2");
const cal3 = document.querySelector(".cal-3");
const cal4 = document.querySelector(".cal-4");
const cal5 = document.querySelector(".cal-5");
const cal6 = document.querySelector(".cal-6");
const cal7 = document.querySelector(".cal-7");
const cal8 = document.querySelector(".cal-8");
const cal9 = document.querySelector(".cal-9");
const left = document.getElementById("left");
const right = document.getElementById("right");
const refresh = window.document.querySelector(".refresh");
const calArea = [cal1, cal2, cal3, cal4, cal5, cal6, cal7, cal8, cal9];

const xYutdi = () => {
  if (
    (cal1.textContent === "X" &&
      cal2.textContent === "X" &&
      cal3.textContent === "X") ||
    (cal4.textContent === "X" &&
      cal5.textContent === "X" &&
      cal6.textContent === "X") ||
    (cal7.textContent === "X" &&
      cal8.textContent === "X" &&
      cal9.textContent === "X") ||
    (cal1.textContent === "X" &&
      cal4.textContent === "X" &&
      cal7.textContent === "X") ||
    (cal2.textContent === "X" &&
      cal5.textContent === "X" &&
      cal8.textContent === "X") ||
    (cal3.textContent === "X" &&
      cal6.textContent === "X" &&
      cal9.textContent === "X") ||
    (cal1.textContent === "X" &&
      cal5.textContent === "X" &&
      cal9.textContent === "X") ||
    (cal3.textContent === "X" &&
      cal5.textContent === "X" &&
      cal7.textContent === "X")
  ) {
    return alert("X YUTDI");
  }
};
const oYutdi = () => {
  if (
    (cal1.textContent === "O" &&
      cal2.textContent === "O" &&
      cal3.textContent === "O") ||
    (cal4.textContent === "O" &&
      cal5.textContent === "O" &&
      cal6.textContent === "O") ||
    (cal7.textContent === "O" &&
      cal8.textContent === "O" &&
      cal9.textContent === "O") ||
    (cal1.textContent === "O" &&
      cal4.textContent === "O" &&
      cal7.textContent === "O") ||
    (cal2.textContent === "O" &&
      cal5.textContent === "O" &&
      cal8.textContent === "O") ||
    (cal3.textContent === "O" &&
      cal6.textContent === "O" &&
      cal9.textContent === "O") ||
    (cal1.textContent === "O" &&
      cal5.textContent === "O" &&
      cal9.textContent === "O") ||
    (cal3.textContent === "O" &&
      cal5.textContent === "O" &&
      cal7.textContent === "O")
  ) {
    return alert("O YUTDI");
  }
};

const durrang = () => {
  if (
    cal1.textContent !== "" &&
    cal2.textContent !== "" &&
    cal3.textContent !== "" &&
    cal4.textContent !== "" &&
    cal5.textContent !== "" &&
    cal6.textContent !== "" &&
    cal7.textContent !== "" &&
    cal8.textContent !== "" &&
    cal9.textContent !== ""
  ) {
    return alert("DURRANG !!!!");
  }
};

const oyinTugadi = () => {
  if (xYutdi() || oYutdi() || durrang()) {
    return true;
  }
};

let xYuradi = true;

calArea.forEach((elmt) => {
  elmt.addEventListener("click", () => {
    console.log("test");

    if (xYuradi && !oyinTugadi()) {
      elmt.textContent = "X";
      left.style.background = "#7c4d4d";
      right.style.background = "";
      left.style.boxShadow = "10px 5px 5px black";
      right.style.boxShadow = "";

      xYuradi = false;
    } else if (!xYuradi && !oyinTugadi()) {
      elmt.textContent = "O";
      right.style.boxShadow = "10px 5px 5px black";
      left.style.boxShadow = "";
      right.style.background = "#7c4d4d";
      left.style.background = "";
      xYuradi = true;
    }
  });
});

refresh.addEventListener("click", () => {
  window.location.reload();
});
