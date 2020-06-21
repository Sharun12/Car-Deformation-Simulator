var car, wall;

var speed, weight;

var deformation;

function setup() {
  createCanvas(800,400);

  car = createSprite(100, 200, 30, 30);
  car.velocityX = speed;

  wall = createSprite(700, 200, 20, 90);

  speed = random(55, 90);
  weight = random(400, 1500);

  deformation = (0.5*weight*speed*speed)/22500;
}

function draw() {
  background(0, 0, 0); 
  
  if (deformation < 80 && car.isTouching(wall)) {
    car.shapeColor(0, 255, 0);
  }

  if (deformation > 80 && deformation < 180 && car.isTouching(wall)) {
    car.shapeColor(230, 230, 0);
  }

  if (deformation > 180) {
    car.shapeColor(255, 0, 0);
  }

  drawSprites();
}