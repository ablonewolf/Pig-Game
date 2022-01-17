"use strict";
// selecting elements
const player1score = document.getElementById("score--0");
const player2score = document.getElementById("score--1");
const DiceEL = document.querySelector(".dice");

// initializing conditions
player1score.textContent = 0;
player2score.textContent = 0;
DiceEL.classList.add("hidden");
