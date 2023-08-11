import { snake } from "./snake";
import { BOARD } from "../constants";

export class Food {
  foodX;
  foodY;

  constructor() {
    this.initializeFood();
  }

  get foodLocation() {
    return [this.foodY, this.foodX];
  }

  randomiseFoodPosition() {
    this.foodX = Math.floor(Math.random() * 20) + 1;
    this.foodY = Math.floor(Math.random() * 20) + 1;
  }

  initializeFood() {
    this.randomiseFoodPosition();
    const foodMarkup = `<div id="food" style="grid-area: ${this.foodY} / ${this.foodX}"></div>`;
    BOARD.innerHTML += foodMarkup;
  }

  moveFood() {
    const foodEl = document.getElementById("food");

    this.randomiseFoodPosition();

    foodEl.style.gridArea = `${this.foodY} / ${this.foodX}`;
  }
}

export const food = new Food();
