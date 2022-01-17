"use strict";
// selecting elements
const Elplayer1 = document.querySelector(".player--0");
const Elplayer2 = document.querySelector(".player--1");
const currentscrplayer1 = document.getElementById("current--0");
const currentscrplayer2 = document.getElementById("current--1");
const DiceEL = document.querySelector(".dice");
const ResetButton = document.querySelector(".btn--new");
const RollButton = document.querySelector(".btn--roll");
const HoldButton = document.querySelector(".btn--hold");

// initializing conditions
let allscores, currentscore, activeplayer, isplaying;

const init = function () {
  DiceEL.classList.add("hidden");

  allscores = [0, 0];
  currentscore = 0;
  activeplayer = 0;
  isplaying = true;
  Elplayer1.classList.add("player--active");
  Elplayer2.classList.remove("player--active");
  Elplayer1.classList.remove("player--winner");
  Elplayer2.classList.remove("player-winner");
  currentscrplayer1.textContent = 0;
  currentscrplayer2.textContent = 0;
  document.getElementById("score--0").textContent = 0;
  document.getElementById("score--1").textContent = 0;
};

init();
// functionality for rolling dice

const switchplayer = function () {
  currentscore = 0;
  document.getElementById(`current--${activeplayer}`).textContent =
    currentscore;
  activeplayer = activeplayer === 0 ? 1 : 0;
  // currentscrplayer1.textContent = currentscore;
  Elplayer1.classList.toggle("player--active");
  Elplayer2.classList.toggle("player--active");
};

RollButton.addEventListener("click", function () {
  if (isplaying) {
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
      allscores[activeplayer] = 0;
      document.getElementById(`score--${activeplayer}`).textContent = 0;
      switchplayer();
    }
  }
});

// functionality for holding

HoldButton.addEventListener("click", function () {
  if (isplaying) {
    console.log(activeplayer);
    allscores[activeplayer] += currentscore;
    let score = allscores[activeplayer];
    document.getElementById(`score--${activeplayer}`).textContent = score;
    console.log(activeplayer);
    console.log(allscores[activeplayer]);
    if (allscores[activeplayer] >= 30) {
      isplaying = false;
      DiceEL.classList.add("hidden");
      document
        .querySelector(`player--${activeplayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`player--${activeplayer}`)
        .classList.remove("player--active");
    } else {
      switchplayer();
    }
  }
});

ResetButton.addEventListener("click", function () {
  init();
});
