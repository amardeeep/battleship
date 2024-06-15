import { player } from "./player.js";
import { renderBoard } from "./dom.js";
import "./style.css";
const ships = [
  "destroyer",
  "submarine",
  "patrol boat",
  "carrier",
  "battleship",
];
//creating dom elements
const body = document.querySelector("body");
//header
const header = document.createElement("div");
header.innerHTML = "BATTLESHIP!";
header.setAttribute("class", "header");
body.appendChild(header);

//boards
//real gameboard rendering
const boards = document.createElement("div");
function randomgen() {
  let row = Math.floor(Math.random() * 10);
  let column = Math.floor(Math.random() * 10);
  let axis = Math.floor(Math.random() * 2);
  return { row, column, axis };
}
//setting

boards.setAttribute("class", "board");
let playerReal = player("real");
function placeShips(boardObj) {
  boardObj.reset();
  for (let ship of ships) {
    let indices = randomgen();
    while (!boardObj.check(indices.row, indices.column, indices.axis, ship)) {
      indices = randomgen();
    }
    boardObj.placeShip(indices.row, indices.column, indices.axis, ship);
  }
}
placeShips(playerReal.boardObj);
const realBoard = document.createElement("div");
const realSection = document.createElement("div");
realSection.setAttribute("class", "realSection");
realBoard.setAttribute("class", "realBoard");
realSection.innerHTML = "Player Board!";
renderBoard(realBoard, playerReal.boardObj);
realSection.appendChild(realBoard);
boards.appendChild(realSection);
body.appendChild(boards);
//middle section that will display turns an final resluts and button to randomize

const statusHeading = document.createElement("div");
statusHeading.innerHTML = "Displaying turns!";
const divDisplayResluts = document.createElement("dialog");
divDisplayResluts.setAttribute("class", "displayResults");
const dialogP = document.createElement("p");
const closeBtn = document.createElement("button");
divDisplayResluts.appendChild(closeBtn);
closeBtn.addEventListener("click", () => {
  const timeout = setTimeout(computerTurn, 1000);
  divDisplayResluts.close();
});
dialogP.setAttribute("class", "output");
divDisplayResluts.appendChild(dialogP);
const buttonRandom = document.createElement("button");
buttonRandom.innerHTML = "Randomize Ships Position!";
buttonRandom.addEventListener("click", () => {
  while (realBoard.hasChildNodes()) {
    realBoard.removeChild(realBoard.firstChild);
  }
  placeShips(playerReal.boardObj);
  renderBoard(realBoard, playerReal.boardObj);
});
statusHeading.appendChild(buttonRandom);
statusHeading.appendChild(divDisplayResluts);
boards.appendChild(statusHeading);
//computer gameboard rendering
let playerComputer = player("computer");
placeShips(playerComputer.boardObj);
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
  }
  playerReal.boardObj.recieveAttack(attackCoor.row, attackCoor.column);

  while (realBoard.hasChildNodes()) {
    realBoard.removeChild(realBoard.firstChild);
  }
  realBoard.innerHTML = "Player Board!";
  renderBoard(realBoard, playerReal.boardObj);
  dialogP.innerHTML = "Your turn";
  divDisplayResluts.showModal();
  if (playerReal.boardObj.haveAllShipsSunk()) {
    dialogP.innerHTML = "Game Over!Computer wins. Thank You for playing :) ";
    divDisplayResluts.showModal();
    return null;
  }
}

//footer
const footer = document.createElement("div");
footer.setAttribute("class", "footer");
const credits = document.createElement("div");
credits.innerHTML =
  'Credits:<a href="https://unsplash.com/@enisvisuals?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Enis Can Ceyhan</a> on <a href="https://unsplash.com/photos/two-ships-in-the-water-with-a-hill-in-the-background--KpYReIbd8Y?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>';

footer.innerHTML = "footer";
footer.appendChild(credits);
body.appendChild(footer);
export { computerTurn };
