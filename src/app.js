/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  document.querySelector(".card").classList.add(randomSuit());
  document.querySelector(".card").innerHTML = randomNumber();
};

let randomNumber = () => {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let indexNumbers = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumbers];
};

let randomSuit = () => {
  let suit = ["diamond", "spade", "clover", "heart"];
  let indexSuit = Math.floor(Math.random() * suit.length);
  return suit[indexSuit];
};
