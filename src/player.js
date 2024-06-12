import { gameBoard } from "./gameBoard.js";
function player(type) {
  let boardObj = gameBoard();
  return {
    type,
    boardObj,
  };
}
export { player };
