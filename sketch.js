let canvasWidth = 2200;
let canvasHeight = 2000;
let x = 0;
let goingForward = true;
let ArrowLeft = moveLeft;
let ArrowRight = moveRight;



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
  rect(1800, 100, 400, 85);
  

  if (goingForward) {
    x++;
  } else {
    x--;
  }

  if (x == canvasWidth){
    goingForward = false;
  }

  if (x == 0){
     goingForward = true;
    }

  if (-x == 2175){
    goingForward = false;
  }

  fill("purple")
  noStroke()
  rect( x, 350, 600, 70, 200);

    fill("black")
    noStroke()
    rect(x, 700, 600, 70, 200);

  fill("red")
  noStroke()
  rect( x, 1050, 600, 70, 200);


    fill("yellow")
    noStroke()
    rect(x, 1400, 600, 70, 200)



  
  
}

