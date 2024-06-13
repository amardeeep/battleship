//function to render boards
import { computerTurn } from "./index.js";
function renderBoard(divTypeBoard, boardObj) {
  const divBoard = document.createElement("div");
  divBoard.setAttribute("class", "divBoard");
  for (let row = 0; row < 10; row++) {
    for (let column = 0; column < 10; column++) {
      const divElement = document.createElement("div");
      divElement.setAttribute("class", "divElement");
      divElement.setAttribute("data-ship", boardObj.board[row][column].isShip);
      divElement.setAttribute(
        "data-status",
        boardObj.board[row][column].isAttacked
      );
      if (divElement.dataset.status == "miss") {
        divElement.setAttribute("class", "missdiv");
      }
      if (divElement.dataset.status == "hit") {
        divElement.setAttribute("class", "hitdiv");
      }
      if (divTypeBoard.getAttribute("class") == "compBoard") {
        divElement.addEventListener("click", () => {
          boardObj.recieveAttack(row, column);
          while (divBoard.hasChildNodes()) {
            divBoard.removeChild(divBoard.firstChild);
          }
          renderBoard(divTypeBoard, boardObj);

          const timeout = setTimeout(computerTurn, 3000);
        });
      }
      divBoard.appendChild(divElement);
    }
  }
  divTypeBoard.appendChild(divBoard);
}
//function to

export { renderBoard };
