"use strict";
// selecting elements
const player1score = document.getElementById("score--0");
const player2score = document.getElementById("score--1");
const currentscrplayer1 = document.getElementById("current--0");
const currentscrplayer2 = document.getElementById("current--1");
const DiceEL = document.querySelector(".dice");
const NewGameButton = document.querySelector(".btn--new");
const RollButton = document.querySelector(".btn--roll");
const HoldButton = document.querySelector(".btn--hold");
// initializing conditions
player1score.textContent = 0;
player2score.textContent = 0;
DiceEL.classList.add("hidden");

let currentscore = 0;

// functionality for rolling dice
RollButton.addEventListener("click", function () {
  //generating random dice value
  const dicevalue = Math.trunc(Math.random() * 6) + 1;

  // display the dice
  DiceEL.classList.remove("hidden");
  DiceEL.src = `dice-${dicevalue}.png`;

  // check if the rolled dice is 1

  if (dicevalue !== 1) {
    currentscore += dicevalue;
    currentscrplayer1.textContent = currentscore;
  } else {
    currentscore = 0;
    currentscrplayer1.textContent = currentscore;
  }
});
