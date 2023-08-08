export class Map {
  mapEl = document.getElementById("app");

  constructor() {
    // this.generateMap();
  }

  get mapChildren() {
    return this.mapEl.children;
  }

  generateMap() {
    for (let i = 0; i < 320; i++) {
      const pixel = document.createElement("div");
      pixel.setAttribute("class", "pixel");
      this.mapEl.appendChild(pixel);
    }
  }
}
