var wall;
var car;




function setup() {
  createCanvas(800,400);

  car = createSprite(50,200,50,20);
  //car.shapecolor(blue);
  car. velocityX = 4; 
  
  


  wall = createSprite(683,197,35,100);

}

function draw() {
  background("blue"); 
  fill("black");
  //text(mouseX+","+mouseY,mouseX,mouseY);

  if(car.isTouching(wall)){
    //car.velocityX = 0;
    car. velocityX = 0; 
    car. x = wall.x-30;
    /*car.shapeColor = Math.round(random(red));
    car.shapeColor = Math.round(random(yellow));
    car.shapeColor = Math.round(random(green));*/

  }






  drawSprites();
}