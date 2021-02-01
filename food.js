import {gridSize} from './game.js' 
import {snake} from './snake.js'

export function createFood () {
  var freeSpace;
  var gameBoard = document.getElementById("game-board");

  while (!freeSpace) {
    var xFood = Math.floor(Math.random()*gridSize)+1;
    var yFood = Math.floor(Math.random()*gridSize)+1;
    freeSpace = true;
    for (let i=0; i<snake.length; i++){
      if (xFood === snake[i].xPosition && yFood === snake[i].yPosition){
        freeSpace = false;
        console.log("Space occupied. Looking for a new space");
      }
    }
  }
  var food = document.createElement('div')
  food.className = "food";
  food.id = "food-element";
  food.style.gridColumnStart = xFood;
  food.style.gridRowStart = yFood;

  gameBoard.appendChild(food);
}

