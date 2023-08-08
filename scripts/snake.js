export class Snake {
  snakeX;
  snakeY;
  moveX;
  moveY;
  speed;
  board = document.querySelector("#board");

  constructor() {
    this.snakeX = 15;
    this.snakeY = 15;

    this.initializeSnake();
  }

  initializeSnake() {
    const snakeMarkup = `<div id="snake" style="grid-area: ${this.snakeY} / ${this.snakeX}"></div>`;
    this.board.innerHTML = snakeMarkup;
  }

  moveSnake(direction) {
    if (direction === "ArrowUp") {
      this.moveX = 0;
      this.moveY = -1;
    } else if (direction === "ArrowDown") {
      this.moveX = 0;
      this.moveY = 1;
    } else if (direction === "ArrowLeft") {
      this.moveX = -1;
      this.moveY = 0;
    } else if (direction === "ArrowRight") {
      this.moveX = 1;
      this.moveY = 0;
    } else {
      return;
    }
    this.initializeSnake();
  }
}
