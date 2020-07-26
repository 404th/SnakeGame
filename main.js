///////////// taking CANVAS ////////////////////////
let can = document.getElementById("snake");
let c = can.getContext("2d");

////////////////// creating Snake body ///////////////
// CONST
const box = 32;
let x = Math.floor(Math.random() * 19) * box;
let y = Math.floor(Math.random() * 19) * box;

let a = Math.floor(Math.random() * 19) * box;
let b = Math.floor(Math.random() * 19) * box;

let snakeArrow = [[x, y]];

function toUp() {
  if( snakeArrow[0][1] >= box ){
    snakeArrow[0][1] -= box;
  }
}

function toDown() {
  if( snakeArrow[0][1] >= box ){
    snakeArrow[0][1] += box;
  }
}

function toRight() {
  if( snakeArrow[0][0] >= box ){
    snakeArrow[0][0] += box;
  }
}

function toLeft() {
  if( snakeArrow[0][0] >= box ){
    snakeArrow[0][0] -= box;
  }
}

function creatingSnake() {

  c.clearRect( 0, 0, 608, 608 )

  c.beginPath();
  c.rect(snakeArrow[0][0], snakeArrow[0][1], box, box);
  c.fillStyle = "blue";
  c.fill();
  c.closePath();

  c.beginPath();
  c.rect(a, b, box, box);
  c.fillStyle = "red";
  c.fill();
  c.closePath();
}

setInterval(() => { 
  creatingSnake()
}, 100);

////////////////////////////////////////////////////////
///////////// Action of the Snake //////////////////////

window.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowUp":
      toUp();
      break;

    case "ArrowDown":
      toDown();
      break;

    case "ArrowRight":
      toRight();
      break;

    case "ArrowLeft":
      toLeft();
      break;
  }
});
