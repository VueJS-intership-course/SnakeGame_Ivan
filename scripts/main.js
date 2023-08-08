/* eslint-disable no-unused-vars */
import "../style.css";

import { Player } from "./player";
import { Map } from "./map";
import { Snake } from "./snake";
import { Food } from "./food";

const player = new Player("Gosho", 0);

player.getUsername();

const map = new Map();

const snake = new Snake();

const food = new Food();
