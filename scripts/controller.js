class Controller {
  _hasDied = false;

  get hasDied() {
    return this._hasDied;
  }

  set hasDied(value) {
    this._hasDied = value;
  }
}

export const controller = new Controller();
