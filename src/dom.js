//function to render boards
import { computerTurn } from "./index.js";
function renderBoard(divTypeBoard, boardObj) {
  const divDisplayResluts = document.querySelector(".displayResults");
  const para = document.querySelector(".output");
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
        if (divElement.dataset.status == "not") {
          divElement.addEventListener("click", () => {
            boardObj.recieveAttack(row, column);
            while (divTypeBoard.hasChildNodes()) {
              divTypeBoard.removeChild(divTypeBoard.firstChild);
            }
            renderBoard(divTypeBoard, boardObj);
            para.innerHTML = "Computer's turn!";
            divDisplayResluts.showModal();
            if (boardObj.haveAllShipsSunk()) {
              para.innerHTML = "Game Over! Player wins.Thank you for playing";
              divDisplayResluts.showModal();
              return null;
            }
          });
        }
      }
      if (divTypeBoard.getAttribute("class") == "realBoard") {
        if (boardObj.board[row][column].isShip != "none") {
          if (divElement.dataset.status == "hit") {
            divElement.setAttribute("class", "hitdiv");
          }
          if (divElement.dataset.status == "not") {
            divElement.setAttribute("class", "hasShip");
          }
        }
      }
      divBoard.appendChild(divElement);
    }
  }
  divTypeBoard.appendChild(divBoard);
}
//function to

export { renderBoard };
