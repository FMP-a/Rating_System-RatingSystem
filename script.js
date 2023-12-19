// "use strict";

// const buttons = document.querySelectorAll(".btn");
// const btnSubmit = document.querySelector(".submit");
// const containerFirst = document.querySelector(".container");
// const containerSecond = document.querySelector(".container2");
// containerFirst.classList.remove("hidden");

// const colorChange = function () {
//   for (let i = 1; i < buttons.length + 1; i++) {
//     document.querySelector(`.btn--${i}`).style.backgroundColor = "#EC751E";
//   }
// };

// for (let i = 1; i < buttons.length + 1; i++) {
//   document.querySelector(`.btn--${i}`).addEventListener("click", colorChange);
// }

// const submitFunc = function () {
//   containerFirst.classList.add("hidden");
//   containerSecond.classList.remove("hidden1");
// };

// btnSubmit.addEventListener("click", submitFunc);

// // "use strict";

// // const btnSubmit = document.querySelector(".submit");
// // let ratingButtons;
// // const containerFirst = document.querySelector(".container");
// // const containerSecond = document.querySelector(".container2");
// // containerFirst.classList.remove("hidden");

// // for (let i = 1; i < 6; i++) {
// //   document.querySelector(`.btn--${i}`).addEventListener("click", function () {
// //     document.querySelector(`.btn--${i}`).style.backgroundColor = "#EC751E";
// //   });
// // }

// // const submitFunc = function () {
// //   containerFirst.classList.add("hidden");
// //   containerSecond.classList.remove("hidden1");
// // };

// // btnSubmit.addEventListener("click", submitFunc);

// // "use strict";

// // const btnSubmit = document.querySelector(".submit");
// // const selectedStars = document.querySelector(".stars");
// // let ratingButtons;
// // const containerFirst = document.querySelector(".container");
// // const containerSecond = document.querySelector(".container2");
// // containerFirst.classList.remove("hidden");

// // for (let i = 1; i < 6; i++) {
// //   ratingButtons = document.querySelector(`.btn--${i}`);
// // }

// // const submitFunc = function () {
// //   containerFirst.classList.add("hidden");
// //   containerSecond.classList.remove("hidden1");
// // };

// // const buttonFunc = function () {
// //   ratingButtons.style.backgroundColor = "#EC751E";
// // };

// // btnSubmit.addEventListener("click", submitFunc);
// // ratingButtons.addEventListener("click", buttonFunc);

// // console.log(ratingButtons);

"use strict";

let selectedNumber;

const buttons = document.querySelectorAll(".btn");
const submit = document.querySelector(".submit");
const containerFirst = document.querySelector(".container");
const containerSecond = document.querySelector(".container2");
const ratingText = document.querySelector(".stars");

containerFirst.classList.remove("hidden");

console.log(buttons);

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    for (let a = 0; a < buttons.length; a++) {
      buttons[a].style.backgroundColor = "#262f38";
    }
    buttons[i].style.backgroundColor = "#EC751E";
    selectedNumber = i + 1;
    console.log(selectedNumber);
  });
}

submit.addEventListener("click", function () {
  containerFirst.classList.add("hidden");
  containerSecond.classList.remove("hidden1");
  ratingText.textContent = ` You selected  ${selectedNumber} Out of 5`;
});
