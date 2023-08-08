export class Snake {
  snakeX;
  snakeY;
  speed;
  board = document.querySelector("#board");

  constructor() {
    this.snakeX = 10;
    this.snakeY = 15;
    this.initializeSnake();
  }

  initializeSnake() {
    const snakeMarkup = `<div id="snake" style="grid-area: ${this.snakeY} / ${this.snakeX}"></div>`;
    this.board.innerHTML += snakeMarkup;
    console.log("in snake");
  }
}
