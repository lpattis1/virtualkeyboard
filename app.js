// global variables

const clearBtn = document.querySelector(".clear-btn");
const keyButtons = document.querySelectorAll(".key");
const displayTyping = document.querySelector(".display-typing");

let space = " ";
let spaceBtn = document.querySelector(".spacebar");
let cap = document.querySelector(".caps-btn");
let capital = document.querySelector(".capital-btn");
let lower = document.querySelector(".lower-btn");
let changeColor = document.querySelector(".color");

// keys:
let userKeys = function () {
  displayTyping.innerHTML = "Enter your text...";

  for (let i = 0; i < keyButtons.length; i++) {
    keyButtons[i].addEventListener("click", function (e) {
      let keys = keyButtons[i].textContent;
      displayTyping.textContent = " ";
      displayTyping.value += keys.toLowerCase();
      displayTyping.style.color = "black";

      cap.addEventListener("click", function () {
        displayTyping.style.textTransform = "uppercase";
      });

      capital.addEventListener("click", function () {
        displayTyping.style.textTransform = "capitalize";
      });

      lower.addEventListener("click", function () {
        displayTyping.style.textTransform = "lowercase";
      });

      changeColor.addEventListener("click", function () {
        let colorArray = [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "a",
          "b",
          "c",
          "d",
          "e",
          "f",
        ];
        let hash = "#";

        for (let i = 0; i < 6; i++) {
          hash += colorArray[Math.floor(Math.random() * 16)];
          console.log(hash);
        }
        displayTyping.style.color = hash;
      });
    });
  }
};

// spacebar:
let spaceBar = function () {
  spaceBtn.onclick = function () {
    spaceBtn = space;
    displayTyping.value += spaceBtn;
  };
};

// clear
let clear = function () {
  clearBtn.addEventListener("click", function () {
    document.querySelector(".top").reset();
    displayTyping.innerHTML = "Enter your text...";
  });
};

// let color = function () {
//   changeColor.addEventListener("click", function () {
//     let colorArray = [
//       "0",
//       "1",
//       "2",
//       "3",
//       "4",
//       "5",
//       "6",
//       "7",
//       "8",
//       "9",
//       "a",
//       "b",
//       "c",
//       "d",
//       "e",
//       "f",
//     ];
//     let hash = "#";

//     for (let i = 0; i < 6; i++) {
//       hash += colorArray[Math.floor(Math.random() * 16)];
//       console.log(hash);
//     }
//     displayTyping.style.color = hash;
//   });
// };

userKeys();
spaceBar();
clear();
