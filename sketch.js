let Width = 5100
let Height = 3300

let img;

function preload (){
  img = loadImage("assets/Background.jpg")
}
function setup() {
  createCanvas("CanvasWidth, CanvasHeight");
}

function draw() {
  background(125);
  image (img, 0, 0)
}
