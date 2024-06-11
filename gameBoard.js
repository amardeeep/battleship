import { co } from "co";
import { ship } from "./ship.js";
function gameBoard() {
  let board = [];
  let ships = [
    { name: "Destroyer", shipObject: ship(5) },
    { name: "WarShip", shipObject: ship(3) },
  ];
  //create board to store
  for (let i = 0; i < 10; i++) {
    board[i] = [];
    for (let j = 0; j < 10; j++) {
      board[i][j] = { isShip: "none", isAttacked: "not attacked" };
    }
  }
  //function getShip
  function getShip(shipName) {
    for (let ship of ships) {
      if (ship.name == shipName) {
        return ship.shipObject;
      }
    }
  }
  //function to place a ship at given coordinates
  function placeShip(row, column, axis, shipname) {
    let ship = getShip(shipname);
    let length = ship.lengthOfShip;
    if (axis == "x") {
      if (column + length < 10) {
        for (let temp = 0; temp <= length; temp++) {
          board[row][column + temp].isShip = shipname;
        }
      }
    }
    if (axis == "y") {
      if (row + length < 10) {
        for (let temp = 0; temp <= length; temp++) {
          board[row + temp][column].isShip = shipname;
        }
      }
    }
    return board;
  }
  //fucntion recieveAttack
  function recieveAttack(row, column) {
    if (board[row][column].isShip == "none") {
      board[row][column].isAttacked = "Miss";
    } else {
      board[row][column].isAttacked = "hit";
      let hitShip = getShip(board[row][column].isShip);
      return hitShip.hit();
    }
  }
  return { board, placeShip, recieveAttack };
}
export { gameBoard };
