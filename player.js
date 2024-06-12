import { gameBoard } from "./gameBoard.js";
function player(type) {
  let board = gameBoard();
  return {
    type,
    board,
  };
}
export { player };
