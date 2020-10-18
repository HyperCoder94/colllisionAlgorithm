function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 120, 50);
  movingRect = createSprite(450,200,60,120);

  fixedRect.shapeColor= "black";
  movingRect.shapeColor = "red";

  fixedRect.debug = true;
  movingRect.debug = true;
}

function draw() {
  background(255,255,255);

  movingRect.y = mouseY;
  movingRect.x = mouseX;

  console.log(movingRect.x-fixedRect.x);


  if (movingRect.x - fixedRect.x <= fixedRect.width/2 + movingRect.width/2 && 
    fixedRect.x-movingRect.x <= fixedRect.width/2 + movingRect.width/2 && 
    movingRect.y - fixedRect.y <= fixedRect.width/2 + movingRect.width/2 && 
    fixedRect.y-movingRect.y <= fixedRect.width/2 + movingRect.width/2) {
    
    fixedRect.shapeColor= "pink";
    movingRect.shapeColor = "purple";
  
  } else {

    fixedRect.shapeColor= "black";
     movingRect.shapeColor = "red";
    
  }  
  drawSprites();

  
}