import { player } from "./player.js";
import { gameBoard } from "./gameBoard.js";
import { ship } from "./ship.js";
import { renderBoard } from "./dom.js";
import "./style.css";
//creating dom elements
const body = document.querySelector("body");
//header
const header = document.createElement("div");
header.innerHTML = "header";
body.appendChild(header);

//boards
//real gameboard rendering
const boards = document.createElement("div");

boards.setAttribute("class", "board");
let playerReal = player("real");
playerReal.boardObj.placeShip(0, 1, "x", "destroyer");
playerReal.boardObj.placeShip(1, 5, "y", "patrol boat");
playerReal.boardObj.placeShip(3, 1, "y", "carrier");
playerReal.boardObj.placeShip(3, 8, "y", "battleship");
playerReal.boardObj.placeShip(8, 3, "x", "submarine");
const realBoard = document.createElement("div");
realBoard.setAttribute("class", "realBoard");
realBoard.innerHTML = "Player Board!";
renderBoard(realBoard, playerReal.boardObj);
boards.appendChild(realBoard);
body.appendChild(boards);
const divDisplayResluts = document.createElement("div");
divDisplayResluts.setAttribute("class", "displayResults");
boards.appendChild(divDisplayResluts);
//computer gameboard rendering
let playerComputer = player("computer");
playerComputer.boardObj.placeShip(1, 0, "x", "destroyer");
playerComputer.boardObj.placeShip(1, 5, "y", "patrol boat");
playerComputer.boardObj.placeShip(3, 1, "y", "carrier");
playerComputer.boardObj.placeShip(3, 8, "y", "battleship");
playerComputer.boardObj.placeShip(8, 3, "x", "submarine");
const compBoard = document.createElement("div");
compBoard.setAttribute("class", "compBoard");
compBoard.innerHTML = "Computer Board!";
renderBoard(compBoard, playerComputer.boardObj);
boards.appendChild(compBoard);
body.appendChild(boards);
//function to handle turns
//fucntioin to generate random coordinates
function computerMove() {
  let row = Math.floor(Math.random() * 10);
  let column = Math.floor(Math.random() * 10);
  return { row, column };
}
function computerTurn() {
  let attackCoor = computerMove();
  while (
    !playerReal.boardObj.recieveAttack(attackCoor.row, attackCoor.column)
  ) {
    attackCoor = computerMove();
    console.log("reached Here1");
  }
  playerReal.boardObj.recieveAttack(attackCoor.row, attackCoor.column);

  while (realBoard.hasChildNodes()) {
    realBoard.removeChild(realBoard.firstChild);
  }
  realBoard.innerHTML = "Player Board!";
  renderBoard(realBoard, playerReal.boardObj);
  divDisplayResluts.innerHTML = "Your turn";
  if (playerReal.boardObj.haveAllShipsSunk()) {
    divDisplayResluts.innerHTML =
      "Game Over!Computer wins. Thank You for playing :) ";
    return null;
  }
}

//footer
const footer = document.createElement("div");
footer.innerHTML = "footer";
body.appendChild(footer);
export { computerTurn };
