"use strict";
// selecting elements
const Elplayer1 = document.querySelector(".player--0");
const Elplayer2 = document.querySelector(".player--1");
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

const allscores = [0, 0];
let currentscore = 0;
let activeplayer = 0;
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
    document.getElementById(`current--${activeplayer}`).textContent =
      currentscore;
  }
  // switching the current player
  else {
    currentscore = 0;
    document.getElementById(`current--${activeplayer}`).textContent =
      currentscore;
    (activescore == activescore) === 0 ? 1 : 0;
    // currentscrplayer1.textContent = currentscore;
    Elplayer1.classList.toggle("player--active");
    Elplayer2.classList.toggle("player--active");
  }
});
