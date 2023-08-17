import { Snake } from "./snake";
export class Player {
  hasPlayer = false;
  // _hasDied = false;

  constructor(username, score) {
    this.username = username;
    this.score = score;
  }

  get hasPlayer() {
    return this.hasPlayer;
  }

  // get hasDied() {
  //   return this._hasDied;
  // }

  // set hasDied(value) {
  //   this._hasDied = value;
  // }

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
        this.hasPlayer = true;
      }
    });
  }
}
