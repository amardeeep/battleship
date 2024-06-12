//function to render boards
function renderBoard(board) {
  const divBoard = document.createElement("div");
  divBoard.setAttribute("class", "divBoard");
  for (let row = 0; row < 10; row++) {
    for (let column = 0; column < 10; column++) {
      const divElement = document.createElement("div");
      divElement.innerHTML = board[row][column].isShip;
      divBoard.appendChild(divElement);
    }
  }
  return divBoard;
}
export { renderBoard };
