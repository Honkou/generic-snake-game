const gameSpeed = 5          // Ticks per second
export const gridSize = 21;          //must be equal to repeat in css

import {snake, createSnakeElement, moveSnake, drawSnake, checkCollision} from './snake.js';
import {createFood} from './food.js';


function game() {

moveSnake();

var goOn = checkCollision();                            //collision check
if (!goOn) {
  clearInterval(refresh);
  alert("Game over! Your score: " + snake.length + "." + "\r\n" + "Clicking ok will reload the page.");
  window.location.reload();
  // return;                                     //not needed if the page is being reloaded
}

drawSnake();
}

alert("Welcome to a very simple snake game. Press ok to start");
createSnakeElement(Math.floor(gridSize/2), Math.floor(gridSize/2));
createFood();
var refresh = window.setInterval(game, 1000/gameSpeed);
