const { default: expect } = require("expect");
import { gameBoard } from "./gameBoard.js";
import { ship } from "./ship.js";
test("gameboard is a 10 by 10 matrix", () => {
  expect(gameBoard().board.length).toBe(10),
    expect(gameBoard().board[0].length).toBe(10);
  expect(gameBoard().board[5][5].isShip).toBe("none");
});
test("ships are placed at some coordinates", () => {
  let board = gameBoard();
  board.placeShip(3, 3, "x", "Destroyer");
  expect(board.board[3][3].isShip).toBe("Destroyer");
  expect(board.board[3][4].isShip).toBe("Destroyer");

  /*board.placeShip(2, 2, "y", "WarShip");
  expect(board.board[2][2].isShip).toBe("WarShip");
  expect(board.board[3][2].isShip).toBe("WarShip");*/
});
