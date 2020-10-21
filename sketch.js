var bullet, wall;
var speed, weight, thinkness;
function setup() {
  createCanvas(1600,400);
  thinkness = random(22, 83)
  speed = random(223, 321);
  weight = random(30, 52);
  bullet = createSprite(50, 200, 50, 5);
  wall = createSprite(1500, 200, thinkness, height/2);
  bullet.velocityX = speed;
}

function draw() {
  background(255,255,255);  
  if(hasCollided(Bullet, Wall)){

bullet.velocityX = 0;
var damage = 0.5*weight*speed*speed/(thinkness*thinkness*thinkness);

if(damage<10){
  wall.shapeColor = "green";
}

if(damage>10){
  wall.shapeColor = "red";
}

  }

  drawSprites();
}
function hasCollided(lBullet, lWall){
bulletRightEdge = lBullet.x + lBullet.width;
wallLeftEdge = lWall.x;
if(bulletRightEdge>=wallLeftEdge){
  return true;
}

  return false;

}