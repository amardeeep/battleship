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
//footer
const footer = document.createElement("div");
footer.innerHTML = "footer";
body.appendChild(footer);
//boards
const boards = document.createElement("div");
let playerReal = player("real");
const realBoard = document.createElement("div");
realBoard.setAttribute("class", "realBoard");
realBoard.appendChild(renderBoard(playerReal.boardObj.board));
boards.appendChild(realBoard);
body.appendChild(boards);
playerReal.boardObj.placeShip(0, 1, "x", "destroyer");
playerReal.boardObj.placeShip(1, 5, "y", "patrol boat");
playerReal.boardObj.placeShip(3, 1, "y", "carrier");
playerReal.boardObj.placeShip(3, 8, "y", "battleship");
playerReal.boardObj.placeShip(8, 3, "x", "submarine");
let playerComputer = player("computer");
playerComputer.boardObj.placeShip(1, 0, "x", "destroyer");
playerComputer.boardObj.placeShip(1, 5, "y", "patrol boat");
playerComputer.boardObj.placeShip(3, 1, "y", "carrier");
playerComputer.boardObj.placeShip(3, 8, "y", "battleship");
playerComputer.boardObj.placeShip(8, 3, "x", "submarine");
