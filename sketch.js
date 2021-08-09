var headBar
var intro;
function setup() {
  createCanvas(400,400);

 
  headBar = createSprite(200,25,400,50)
headBar.shapeColor="blue"
  intro = new inntro()
}

function draw() {
  background(255);

  intro.display()
  drawSprites();
}