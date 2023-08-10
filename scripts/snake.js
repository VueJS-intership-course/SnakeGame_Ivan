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
    this.snakeBody[0] = [this.snakeY, this.snakeX];
    const snakeMarkup = `<div id="snake" style="grid-area: ${this.snakeBody[0][0]} / ${this.snakeBody[0][1]}"></div>`;
    this.board.innerHTML += snakeMarkup;
  }

  addSnakeSegment() {
    let i = this.snakeBody.length - 1;
    const snakeSegment = `<div id="${i}" class="snake-body" style="grid-area: ${this.snakeBody[i][0]} / ${this.snakeBody[i][1]}"></div>`;

    this.board.innerHTML += snakeSegment;
  }

  moveSnake(direction) {
    this.checkOnSnake();

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

    //Move snake body
    for (let i = this.snakeBody.length - 1; i > 0; i--) {
      this.snakeBody[i] = this.snakeBody[i - 1];
      const snakeEl = document.getElementById(i);
      snakeEl.style.gridArea = `${this.snakeBody[i][0]} / ${this.snakeBody[i][1]}`;
    }

    //Moving the head of the snake
    this.snakeBody[0] = [this.snakeY, this.snakeX];
    const snakeHead = document.getElementById("snake");
    snakeHead.style.gridArea = `${this.snakeY} / ${this.snakeX}`;

    this.eatFood();
  }

  eatFood() {
    const [foodY, foodX] = [...food.foodLocation];
    if (foodY === this.snakeY && foodX === this.snakeX) {
      this.snakeBody.push([foodY, foodX]);
      food.moveFood();
      this.addSnakeSegment();
    }
  }

  checkOnSnake() {
    const [foodY, foodX] = [...food.foodLocation];
    for (let i = 0; i < this.snakeBody.length; i++) {
      const [snakeY, snakeX] = [...this.snakeBody[i]];
      if (snakeY === foodY && snakeX === foodX) {
        food.moveFood();
      }
    }
  }
}
