import { food } from "./food";
import { controller } from "./controller";
import { BOARD } from "../constants";

export class Snake {
  snakeX;
  snakeY;
  snakeBody = [];
  moveX;
  moveY;
  speed = 2;
  _direction;
  _lastDirection;

  constructor() {
    this.snakeX = 15;
    this.snakeY = 15;

    this.initializeSnake();
  }

  get snakeBody() {
    return this.snakeBody;
  }

  set direction(value) {
    this._direction = value;
  }

  get direction() {
    return this._direction;
  }

  set lastDirection(value) {
    this._lastDirection = value;
  }

  get lastDirection() {
    return this._lastDirection;
  }

  initializeSnake() {
    this.snakeBody[0] = [this.snakeY, this.snakeX];
    // const snakeMarkup = `<div id="snake" style="grid-area: ${this.snakeBody[0][0]} / ${this.snakeBody[0][1]}"></div>`;
    // BOARD.innerHTML += snakeMarkup;

    const snakeSegment = document.createElement("div");
    snakeSegment.id = "snake";
    snakeSegment.style.gridArea = `${this.snakeBody[0][0]} / ${this.snakeBody[0][1]}`;

    BOARD.appendChild(snakeSegment);
  }

  addSnakeSegment() {
    // let i = this.snakeBody.length - 1;
    // const snakeSegment = `<div id="${i}" class="snake-body" style="grid-area: ${this.snakeBody[i][0]} / ${this.snakeBody[i][1]}"></div>`;

    // BOARD.innerHTML += snakeSegment;

    let i = this.snakeBody.length - 1;
    const snakeSegment = document.createElement("div");
    snakeSegment.id = i;
    snakeSegment.className = "snake-body";
    snakeSegment.style.gridArea = `${this.snakeBody[i][0]} / ${this.snakeBody[i][1]}`;

    BOARD.appendChild(snakeSegment);
  }

  moveSnake() {
    this.checkOnSnake(food.foodLocation);

    switch (this.direction) {
      case "ArrowUp":
        if (this.lastDirection === "ArrowDown") break;
        this.moveX = 0;
        this.moveY = -1;
        this._lastDirection = "ArrowUp";
        break;
      case "ArrowDown":
        if (this.lastDirection === "ArrowUp") break;
        this.moveX = 0;
        this.moveY = 1;
        this._lastDirection = "ArrowDown";
        break;
      case "ArrowLeft":
        if (this.lastDirection === "ArrowRight") break;

        this.moveX = -1;
        this.moveY = 0;
        this._lastDirection = "ArrowLeft";

        break;
      case "ArrowRight":
        if (this.lastDirection === "ArrowLeft") break;
        this.moveX = 1;
        this.moveY = 0;
        this._lastDirection = "ArrowRight";
        break;
      default:
        return;
    }

    //Changing the coordinates of the snake
    this.snakeX += this.moveX;
    this.snakeY += this.moveY;

    //Mirroring if it goes off the grid
    if (this.snakeX > 20) {
      this.snakeX = 1;
    }
    if (this.snakeX < 1) {
      this.snakeX = 20;
    }
    if (this.snakeY > 20) {
      this.snakeY = 1;
    }
    if (this.snakeY < 1) {
      this.snakeY = 20;
    }

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

    // this.checkBitItself(this.snakeBody[0]);

    this.checkOnSnake(this.snakeBody[0], "snake");

    this.eatFood();
  }

  eatFood() {
    const [foodY, foodX] = [...food.foodLocation];
    if (foodY === this.snakeBody[0][0] && foodX === this.snakeBody[0][1]) {
      this.snakeBody.push([foodY, foodX]);
      food.moveFood();
      this.addSnakeSegment();
      this.speed++;
    }
  }

  checkOnSnake(coordinates, type = "food") {
    const [cordY, cordX] = [...coordinates];
    for (let i = type !== "food" ? 1 : 0; i < this.snakeBody.length; i++) {
      const [snakeY, snakeX] = [...this.snakeBody[i]];
      if (snakeY === cordY && snakeX === cordX) {
        type === "snake" ? (controller.hasDied = true) : food.moveFood();
      }
    }
  }
}

export const snake = new Snake();
