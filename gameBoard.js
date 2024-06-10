import { ship } from "./ship.js";
function gameBoard() {
  let board = [];
  let ships = [
    { name: "Destroyer", shipObject: ship(5) },
    { name: " WarShip", shipObject: ship(3) },
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
    if ((axis = "x")) {
      if (column + ship.lengthOfShip < 10) {
        for (let temp = 0; temp <= ship.lengthOfShip; temp++) {
          board[row][column + temp].isShip = shipname;
        }
      }
    }
    if ((axis = "y")) {
      if (row + ship.lengthOfShip < 10) {
        for (let temp = 0; temp <= ship.lengthOfShip; temp++) {
          board[row + temp][column].isShip = shipname;
        }
      }
    }
    return board;
  }
  return { board, placeShip };
}
export { gameBoard };
/*function placeShip(i, j, axis, ship, length) {
    if (axis == "x") {
      if (10 - length >= j) {
        for (let temp = 0; temp < length; temp++) {
          board[i][temp + j].isShip = true;
          board[i][temp + j].shipName = ship;
        }
      } else {
        return "Invalid coordinates!";
      }
    } else if (axis == "y") {
      if (10 - length >= i) {
        for (let temp = 0; temp < length; temp++) {
          board[temp + i][j].isShip = true;
          board[temp + i][j].shipName = ship;
        }
      } else {
        return "Invalid Coordinates!";
      }
    }
    return board;
  }*/
