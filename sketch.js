let canvasWidth = 3400;
let canvasHeight = 2000;
let horizontalPositionOdd = 0;
let horizontalPositionEven = canvasWidth;
let goingForwardOdd = true;
let goingForwardEven = false;
// let ArrowLeft = moveLeft;
// let ArrowRight = moveRight;
const speed = 8;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  background ("skyblue")
}

function draw() {
  background("skyblue");

  fill("blue")
  noStroke()
  circle(2100, 65, 70);

  fill("brown")
  noStroke()
  rect(3000, 100, 400, 85);

  fill("white")
  noStroke()
  rect(1200, 1800, 800, 75);
  
  // this is for the odd ones...

  if (goingForwardOdd == true) { horizontalPositionOdd += speed } 
  else { horizontalPositionOdd -= speed }

  if (horizontalPositionOdd <= 0) goingForwardOdd = true;
  if (horizontalPositionOdd >= canvasWidth) goingForwardOdd = false;

  // this is for the EVEN ones...
  
  if (goingForwardEven == true) { horizontalPositionEven += speed } 
  else { horizontalPositionEven -= speed }

  if (horizontalPositionEven <= 0) goingForwardEven = true;
  if (horizontalPositionEven >= canvasWidth) goingForwardEven = false;



  fill("purple")
  noStroke()
  rect( horizontalPositionOdd, 350, 600, 70, 200);

    fill("black")
    noStroke()
    rect(horizontalPositionEven, 700, 600, 70, 200);

  fill("red")
  noStroke()
  rect( horizontalPositionOdd, 1050, 600, 70, 200);


    fill("yellow")
    noStroke()
    rect(horizontalPositionEven, 1400, 600, 70, 200)


  
  
  
}

