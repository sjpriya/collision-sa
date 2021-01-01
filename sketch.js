var fixedRect, movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(500,400,60,100);

  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
}

function draw() {
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
if(movingRect.x - fixedRect.x <= movingRect.width/2 + fixedRect.width/2)
  {
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
else
{
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
}

  background(255,255,255);  
  drawSprites();
}