let canvasWidth = 2175;
let canvasHeight = 2000;
let x = 0;
let rectSize = 30;
let goingForward = true;


function setup() {
  createCanvas(canvasWidth, canvasHeight);
  rectMode(CENTER);

}
function draw() {
  background ("skyblue")
  ellipse(1800, 45, 70)
  color ("purple")
  noStroke()
    

  rect(2000, 100, 400, 35)

  rect(100, 185, 400, 35)
  if (x=canvasWidth) {
    x++;
  } else {
    x--;
  }

  if (x == canvasWidth){
 goingForward = false;
  }
  if (x== 0){
    goingForward = true;
  }

    rect(x, canvasHeight/2, 30, 30)
  }


 

