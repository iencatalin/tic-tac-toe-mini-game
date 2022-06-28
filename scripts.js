let btnOptn = document.querySelectorAll(".button-option");
let popUp = document.querySelector(".pop-up");
let newgameBtn = document.querySelector("#new-game");
let restartBtn = document.querySelector("#restart");
let mesgTxt = document.querySelector("#message");

let winningPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [2, 5, 8],
  [6, 7, 8],
  [3, 4, 5],
  [0, 4, 8],
  [2, 4, 6],
];

//Player 'X' plays first
let xTurn = true;
let count = 0;

const disableButtons = () => {
  btnOptn.forEach((element) => (element.disabled = true));

  popUp.classList.remove("hide");
};

const enableButtons = () => {
  btnOptn.forEach((element) => {
    element.innerText = "";
    element.disabled = false;
  });

  popUp.classList.add("hide");
};

const winFunction = (letter) => {
  disableButtons();
  if (letter == "X") {
    mesgTxt.innerHTML = "&#x1F389; <br> 'X' Wins";
  } else {
    mesgTxt.innerHTML = "&#x1F389; <br> 'O' Wins";
  }
};

const drawFunction = () => {
  disableButtons();
  mesgTxt.innerHTML = "&#x1F60E; <br> It's a Draw";
};
//New Game
newgameBtn.addEventListener("click", () => {
  count = 0;
  enableButtons();
});
restartBtn.addEventListener("click", () => {
  count = 0;
  enableButtons();
});
//Win Logic
const winChecker = () => {
  for (let i of winningPattern) {
    let [element1, element2, element3] = [
      btnOptn[i[0]].innerText,
      btnOptn[i[1]].innerText,
      btnOptn[i[2]].innerText,
    ];

    if (element1 != "" && (element2 != "") & (element3 != "")) {
      if (element1 == element2 && element2 == element3) {
        winFunction(element1);
      }
    }
  }
};
//Display X/O on click
btnOptn.forEach((element) => {
  element.addEventListener("click", () => {
    if (xTurn) {
      xTurn = false;
      //Display X
      element.innerText = "X";
      element.disabled = true;
    } else {
      xTurn = true;
      //Display Y
      element.innerText = "O";
      element.disabled = true;
    }

    count += 1;
    if (count == 9) {
      drawFunction();
    }

    winChecker();
  });
});
//Enable Buttons and disable popup on page load
window.onload = enableButtons;
