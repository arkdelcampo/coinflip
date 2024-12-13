// COIN FLIP SIMULATOR

// HTML VARIABLES
let outputEl = document.getElementById("output");
let headsSpanEl = document.getElementById("heads-out");
let tailsSpanEl = document.getElementById("tails-out");

let output2El = document.getElementById("output2");
let oneSpanEl = document.getElementById("one-out");
let twoSpanEl = document.getElementById("two-out");
let threeSpanEl = document.getElementById("three-out");
let fourSpanEl = document.getElementById("four-out");
let fiveSpanEl = document.getElementById("five-out");
let sixSpanEl = document.getElementById("six-out");

// Count variables
let numHeads = 0;
let numTails = 0;

let numOne = 0;
let numTwo = 0;
let numThree = 0;
let numFour = 0;
let numFive = 0;
let numSix = 0;

// Button event listener
document.getElementById("btn").addEventListener("click", btnClicked);
document.getElementById("dice-btn").addEventListener("click", diceBtnClicked);

function btnClicked() {
  // Generating a random number
  let randNum = Math.random();
  console.log(randNum);

  // Simulate the Coin Flip
  if (randNum < 0.5) {
    outputEl.innerHTML = "<img src='img/heads.png' /> ";
    numHeads++;
    headsSpanEl.innerHTML = numHeads;
  } else {
    outputEl.innerHTML = "<img src='img/tails.png' />";
    numTails++;
    tailsSpanEl.innerHTML = numTails;
  }
}

function diceBtnClicked() {
  // Generating a random number
  let randNum = Math.random();
  console.log(randNum);

  // Simulate the Coin Flip
  if (randNum < 0.165) {
    output2El.innerHTML = "<img src='img/1.png' /> ";
    numOne++;
    oneSpanEl.innerHTML = numOne;
  } else if (randNum < 0.33) {
    output2El.innerHTML = "<img src='img/2.png' /> ";
    numTwo++;
    twoSpanEl.innerHTML = numTwo;
  } else if (randNum < 0.495) {
    output2El.innerHTML = "<img src='img/3.png' /> ";
    numThree++;
    threeSpanEl.innerHTML = numThree;
  } else if (randNum < 0.66) {
    output2El.innerHTML = "<img src='img/4.png' /> ";
    numFour++;
    fourSpanEl.innerHTML = numFour;
  } else if (randNum < 0.825) {
    output2El.innerHTML = "<img src='img/5.png' /> ";
    numFive++;
    fiveSpanEl.innerHTML = numFive;
  } else {
    output2El.innerHTML = "<img src='img/6.png' /> ";
    numSix++;
    sixSpanEl.innerHTML = numSix;
  }
}
