/* eslint-disable no-unused-vars */
import "../styles/style.css";

import { Player } from "./player";
import { Map } from "./map";
import { Snake } from "./snake";
import { Food } from "./food";

const player = new Player();

player.getUsername();

const food = new Food();
const snake = new Snake();

document.addEventListener("keydown", (e) => {
  console.log("in move");
  snake.moveSnake(e.code);

  snake.snakeX += snake.moveX;
  snake.snakeY += snake.moveY;
});
