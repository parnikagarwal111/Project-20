var car,wall;
var speed,weight;
var deformation;

function setup() {
  createCanvas(1400,400);
  createEdgeSprites();
  
  //speed and weight
  speed=Math.round(random(55,90));
  weight=Math.round(random(400,1300));

  //car and wall
  car=createSprite(50,200,50,50);
  car.velocityX=speed;

  //wall
  wall=createSprite(1300,200,60,height/2);

  //deformation
  deformation=0.5*weight*speed*speed/22500;
}

function draw() {
  background(0);

if(car.collide(wall)){
  car.velocityX=0;
}
  
if(deformation<=100 && wall.x-car.x<=wall.width/2+car.width/2 && car.x-wall.x<=wall.width/2+car.width/2 && wall.y-car.y<=wall.height/2+car.height/2 && car.y-wall.y<=wall.height/2+car.height/2){
  car.shapeColor="green";
}

if(deformation>=100 && deformation<=180 && wall.x-car.x<=wall.width/2+car.width/2 && car.x-wall.x<=wall.width/2+car.width/2 && wall.y-car.y<=wall.height/2+car.height/2 && car.y-wall.y<=wall.height/2+car.height/2){
  car.shapeColor="yellow";
}

if(deformation>=180 && wall.x-car.x<=wall.width/2+car.width/2 && car.x-wall.x<=wall.width/2+car.width/2 && wall.y-car.y<=wall.height/2+car.height/2 && car.y-wall.y<=wall.height/2+car.height/2){
  car.shapeColor="green";
}

  drawSprites();
}