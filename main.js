//getting canvas element
let cvs = document.getElementById("snake");
let c = cvs.getContext("2d");

//const
const box = 32;

//Load images
const ground = new Image();
ground.src = "./img/ground.png";

const foodImg = new Image();
foodImg.src = "./img/food.png";

// load audio files

let dead = new Audio();
let eat = new Audio();
let up = new Audio();
let right = new Audio();
let left = new Audio();
let down = new Audio();

dead.src = "audio/dead.mp3";
eat.src = "audio/eat.mp3";
up.src = "audio/up.mp3";
right.src = "audio/right.mp3";
left.src = "audio/left.mp3";
down.src = "audio/down.mp3";

// creating our hero( Snake )

let snake = [];

snake[0] = {
  x: 9 * box,
  y: 10 * box,
};

// creating our hero's food

let food = {
  x: Math.floor(Math.random() * 17 + 1) * box,
  y: Math.floor(Math.random() * 15 + 3) * box,
};

// Score
let score = 0;

//running
let d;

document.addEventListener("keydown", direction);

function direction(event) {
  if (event.keyCode === 37 && d !== "RIGHT") {
    d = "LEFT";
    left.play();
  } else if (event.keyCode === 38 && d !== "DOWN") {
    d = "UP";
    up.play();
  } else if (event.keyCode === 39 && d !== "LEFT") {
    d = "RIGHT";
    right.play();
  } else if (event.keyCode === 40 && d !== "UP") {
    d = "DOWN";
    down.play();
  }
}

// chech collision
function collision(head, arr) {
  for (let j = 0; j < arr.length; j++) {
    if (head.x === arr[j].x && head.y === arr[j].y) {
      return true;
    }
  }

  return false;
}

//drawing
function draw() {
  c.drawImage(ground, 0, 0);

  for (let i = 0; i < snake.length; i++) {
    c.fillStyle = i == 0 ? "green" : "white";
    c.fillRect(snake[i].x, snake[i].y, box, box);

    c.strokeStyle = "red";
    c.strokeRect(snake[i].x, snake[i].y, box, box);
  }

  c.drawImage(foodImg, food.x, food.y);

  // previous positions of the hero's head
  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  //choose the direction
  if (d === "LEFT") snakeX -= box;
  if (d === "RIGHT") snakeX += box;
  if (d === "UP") snakeY -= box;
  if (d === "DOWN") snakeY += box;

  //snake eats food
  if (snakeX === food.x && snakeY === food.y) {
    score++;
    eat.play()
    food = {
      x: Math.floor(Math.random() * 17 + 1) * box,
      y: Math.floor(Math.random() * 15 + 3) * box,
    };
  } else {
    //remove the tail
    snake.pop();
  }

  //adding new Head
  let newHead = {
    x: snakeX,
    y: snakeY,
  };

  // game over
  if (
    snakeX < box ||
    snakeX > 17 * box ||
    snakeY < 3 * box ||
    snakeY > 17 * box ||
    collision(newHead, snake)
  ) {
    clearInterval(game);
    dead.play()
  }

  snake.unshift(newHead);

  c.fillStyle = "#fff";
  c.font = "45px roboto";
  c.fillText(score, 2 * box, 1.6 * box);
}

//call draw() every 100ms
let game = setInterval(draw, 100);
