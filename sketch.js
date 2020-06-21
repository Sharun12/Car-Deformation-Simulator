var car, wall;

var speed, weight;

var deformation;

function setup() {
  createCanvas(800,400);

  speed = random(55, 90);
  weight = random(400, 1500);

  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed/2;
  
  wall = createSprite(750, 200, 50, canvas.height/2);

  deformation = 0.5*weight*car.speed*car.speed;
}

function draw() {
  background(0, 0, 0);  

  if(car.collide(wall)) {
    if(deformation < 100) {
      car.shapeColor(0, 255, 0);
    }

    if(deformation > 100 && deformation < 180) {
      car.shapeColor(230, 230, 0);
    }

    if(deformation > 180) {
      car.shapeColor(255, 0, 0);
    }
  }

  drawSprites();
}
  