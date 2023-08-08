export class Food {
  foodX;
  foodY;
  board = document.querySelector("#board");

  constructor() {
    this.generateFood();
  }

  randomiseFoodPosition() {
    this.foodX = Math.floor(Math.random() * 30) + 1;
    this.foodY = Math.floor(Math.random() * 30) + 1;
  }

  generateFood() {
    this.randomiseFoodPosition();
    const foodMarkup = `<div id="food" style="grid-area: ${this.foodY} / ${this.foodX}"></div>`;
    this.board.innerHTML = foodMarkup;
  }
}
