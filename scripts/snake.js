import { food } from "./food";

export class Snake {
  snakeX;
  snakeY;
  snakeBody = [];
  moveX;
  moveY;
  speed;
  board = document.querySelector("#board");

  constructor() {
    this.snakeX = 15;
    this.snakeY = 15;

    this.initializeSnake();
  }

  get snakeBody() {
    return this.snakeBody;
  }

  initializeSnake() {
    const snakeMarkup = `<div id="snake" style="grid-area: ${this.snakeY} / ${this.snakeX}"></div>`;
    this.snakeBody[0] = [this.snakeY, this.snakeX];
    this.board.innerHTML += snakeMarkup;
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

    //Changing the coordinates of the snake
    this.snakeX += this.moveX;
    this.snakeY += this.moveY;

    this.snakeBody[0] = [this.snakeY, this.snakeX];

    const snakeHead = document.getElementById("snake");
    snakeHead.style.gridArea = `${this.snakeY} / ${this.snakeX}`;

    this.eatFood();
  }

  eatFood() {
    const [foodY, foodX] = [...food.foodLocation];
    if (foodY === this.snakeY && foodX === this.snakeX) {
      food.moveFood();
    }
  }
}
