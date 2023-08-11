/* eslint-disable no-unused-vars */
import "../styles/style.css";

import { snake } from "./snake";
import { Player } from "./player";
import { controller } from "./controller";

export const player = new Player();

player.getUsername();

// export const snake = new Snake();

document.addEventListener("keydown", (e) => {
  snake.direction = e.code;
});

let lastRenderTime = 0;

function gameLoop(currentTime) {
  window.requestAnimationFrame(gameLoop);

  if (controller.hasDied) {
    alert("You have died!");
    window.cancelAnimationFrame();
  }

  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / snake.speed) return;

  if (player.hasPlayer) {
    snake.moveSnake(snake.direction);
  }

  lastRenderTime = currentTime;
}

window.requestAnimationFrame(gameLoop);
