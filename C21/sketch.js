var fixedRect, movingRect;
var car, wall;
var box1,box2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  car = createSprite(200,200,20,20);
car .shapeColor = "blue";

wall = createSprite(100,50,20,100);
wall.shapeColor = "yellow";

box1 = createSprite(100,300,30,30);
box1.velocityX = 5;
box1.shapeColor = "green";


box2 = createSprite(400,300,30,30);
box2.velocityX = -5;

}

function draw() {
  background(0,0,0);  
 //movingRect.x = World.mouseX;
// movingRect.y = World.mouseY;
 car.x = World.mouseX;
 car.y = World.mouseY;
 
 bounceOff(box1,box2);
    
 if(isTouching(car,wall)){
     car.shapeColor = "grey";
     wall.shapeColor = "grey";
 }
 else{
     car.shapeColor = "blue";
     wall.shapeColor = "yellow";
 }

 if(isTouching(movingRect,fixedRect)){
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
 }
 else{
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
 }

  drawSprites();
}


