import expect from "expect";
import { gameBoard } from "./gameBoard.js";
import { ship } from "./ship.js";
test("gameboard is a 10 by 10 matrix", () => {
  expect(gameBoard().board.length).toBe(10);
  expect(gameBoard().board[0].length).toBe(10);
  expect(gameBoard().board[5][5].isShip).toBe("none");
});
let board = gameBoard();
board.placeShip(3, 3, "x", "Destroyer");
board.placeShip(2, 2, "y", "WarShip");
test("ships are placed at some coordinates", () => {
  expect(board.board[3][3].isShip).toBe("Destroyer");
  expect(board.board[3][4].isShip).toBe("Destroyer");
});
test("placeShip on y axis", () => {
  expect(board.board[2][2].isShip).toBe("WarShip");
  expect(board.board[3][2].isShip).toBe("WarShip");
});
board.recieveAttack(3, 3);
test("recieveAttack, hits a ship", () => {
  expect(board.board[3][3].isAttacked).toBe("hit");
  expect(board.recieveAttack(3, 3)).toBe(2);
});
