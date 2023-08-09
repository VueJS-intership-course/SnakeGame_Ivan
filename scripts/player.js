import { Snake } from "./snake";
export class Player {
  constructor(username, score) {
    this.username = username;
    this.score = score;
  }

  hideInputField() {
    const parentElement = document.getElementById("input-username-parent");
    parentElement.style.display = "none";
  }

  getUsername() {
    const usernameBtn = document.getElementById("username-btn");
    const usernameInput = document.getElementById("username-input");

    usernameBtn.addEventListener("click", () => {
      if (usernameInput.value.length === 0) {
        alert("Username cannot be empty!");
      } else {
        this.username = usernameInput.value;
        this.hideInputField();

        //Initialize the snake after getting the username

        const snake = new Snake();

        document.addEventListener("keydown", (e) => {
          snake.moveSnake(e.code);
        });
      }
    });
  }
}
