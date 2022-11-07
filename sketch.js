let canvasWidth = 6000;
let canvasHeight = 6000;
let horizontalPositionOdd = 0;
let horizontalPositionEven = canvasWidth;
let goingForwardOdd = true;
let goingForwardEven = false;
let ArrowLeft = true;
let ArrowRight  = false;

const speed = 8;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  background ("skyblue")

  
}

function draw() {
  background("skyblue");
  
  fill("lime")
  noStroke()
  ellipse(2275, 120, 85, 85)

  fill("brown")
  noStroke()
  rect(2275, 150, 700, 30);
  
 
  
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


  fill("darkgreen")
  noStroke()
  rect( horizontalPositionOdd, 350, 800, 70);

    fill("black")
    noStroke()
    rect(horizontalPositionEven, 700, 800, 70);

  fill("red")
  noStroke()
  rect( horizontalPositionOdd, 1050, 800, 70);


    fill("yellow")
    noStroke()
    rect(horizontalPositionEven, 1400, 800, 70);


    fill("white")
    noStroke()
    rect(horizontalPositionOdd, 1800, 800, 70);

    fill("black")
    noStroke()
    rect(horizontalPositionEven, 2100, 800, 70);

  fill("purple")
  noStroke()
  rect( horizontalPositionOdd, 2400, 800, 70);

  fill("darkred")
  noStroke()
  rect( horizontalPositionEven, 2700, 800, 70);

  fill("limegreen")
  noStroke()
  rect( horizontalPositionOdd, 3000, 800, 70);

  fill ("grey")
  noStroke()
    rect(horizontalPositionEven, 3400, 500, 120)

}
//this is for the round circle movement
  
function keyPressed() {
  if (keyCode === ArrowLeft) {
    value = 255;
  } else if (keyCode === ArrowRight) {
    value = 0;
  }
}