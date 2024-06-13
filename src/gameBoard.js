import { ship } from "./ship.js";
function gameBoard() {
  let board = [];
  let ships = [
    { name: "destroyer", shipObject: ship(3) },
    { name: "patrol boat", shipObject: ship(2) },
    { name: "carrier", shipObject: ship(5) },
    { name: "battleship", shipObject: ship(4) },
    { name: "submarine", shipObject: ship(3) },
  ];
  let misses = [];
  //create board to store
  for (let i = 0; i < 10; i++) {
    board[i] = [];
    for (let j = 0; j < 10; j++) {
      board[i][j] = { isShip: "none", isAttacked: "not" };
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
        for (let temp = 0; temp < length; temp++) {
          board[row][column + temp].isShip = shipname;
        }
      }
    }
    if (axis == "y") {
      if (row + length < 10) {
        for (let temp = 0; temp < length; temp++) {
          board[row + temp][column].isShip = shipname;
        }
      }
    }
    return board;
  }
  //fucntion to store a miss
  function missedAttacks(row, column) {
    misses.push({ row, column });
  }
  //fucntion recieveAttack
  function recieveAttack(row, column) {
    if (board[row][column].isAttacked == "not") {
      if (board[row][column].isShip == "none") {
        board[row][column].isAttacked = "miss";
        missedAttacks(row, column);
        return misses;
      } else {
        board[row][column].isAttacked = "hit";
        let hitShip = getShip(board[row][column].isShip);
        return hitShip.hit();
      }
    } else {
      return false;
    }
  }
  //functio to check if all ships have sunk
  function haveAllShipsSunk() {
    for (let ship of ships) {
      if (ship.shipObject.isSunk() == false) {
        return false;
      }
    }
    return true;
  }
  return { board, placeShip, recieveAttack, haveAllShipsSunk };
}
export { gameBoard };
