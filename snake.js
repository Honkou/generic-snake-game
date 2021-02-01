import {gridSize} from './game.js'
import {createFood} from './food.js'


export var snake = [];

export function createSnakeElement (x,y) {
  var snakeElement = document.createElement('div');
  var i=snake.length;
  var gameBoard = document.getElementById("game-board");


  snakeElement.className="snake";
  snakeElement.id = snake.length;
  snakeElement.style.gridRowStart = y;
  snakeElement.style.gridColumnStart = x;

  snake.push({xPosition: x, yPosition: y});
  gameBoard.appendChild(snakeElement);
  console.log('Snake element created')
}

export  function checkCollision () {
  var isFree = true;
  for (let i=1; i<snake.length; i++) {
    if (snake[0].xPosition === snake[i].xPosition && snake[0].yPosition === snake[i].yPosition) {
      isFree = false;
      return isFree;
    }
  }
  if (snake[0].xPosition > gridSize || snake[0].yPosition > gridSize) {
    isFree = false;
  }
  if (snake[0].xPosition === 0 || snake[0].yPosition === 0) {
    isFree = false;
  }
  return isFree;
}


export function moveSnake () {
  for (let i=snake.length -1 ; i>0; i--) {                    //this is a loop for calculation
    snake[i].xPosition = snake[i-1].xPosition;
    snake[i].yPosition = snake[i-1].yPosition;
  }
  snake[0].xPosition += xSpeed;
  snake[0].yPosition += ySpeed;

  previousXSpeed = xSpeed;
  previousYSpeed = ySpeed;


}

export function drawSnake () {
  var trail = document.getElementById(0);                               //this is a loop for drawing
  trail.style.gridColumnStart = snake[0].xPosition;
  trail.style.gridRowStart = snake[0].yPosition;

  var food = document.getElementById("food-element")
  if (trail.style.gridColumnStart === food.style.gridColumnStart && trail.style.gridRowStart === food.style.gridRowStart ) {
    console.log("Food eaten!");
    food.remove();
    createFood();
    createSnakeElement(snake[snake.length-1].xPosition - xSpeed, snake[snake.length-1].yPosition - ySpeed);
  }

  for (var i=snake.length -1 ; i>0; i--) {
    var trail = document.getElementById(i);
    trail.style.gridColumnStart = snake[i].xPosition;
    trail.style.gridRowStart = snake[i].yPosition;
  }
}

var xSpeed = 0;
var ySpeed = 0;

var previousXSpeed = 0;
var previousYSpeed = 0;


//This checks for an arrow key press
document.onkeydown = checkKey;

  function checkKey(e) {
  
      e = e || window.event;
  
      if (e.keyCode == '38') {
          // up arrow
          if (previousYSpeed == 0) {    
          xSpeed = 0;
          ySpeed = -1;
          }
      }
      else if (e.keyCode == '40') {
          // down arrow
          if (previousYSpeed == 0) {
          xSpeed = 0;
          ySpeed = 1;  
          }
      }
      else if (e.keyCode == '37') {
          // left arrow
          if (previousXSpeed == 0) {
          xSpeed = -1;
          ySpeed = 0;
          }
      }
      else if (e.keyCode == '39') {
          // right arrow
          if (previousXSpeed == 0) {
          xSpeed = 1;
          ySpeed = 0;
          }
        }
  }