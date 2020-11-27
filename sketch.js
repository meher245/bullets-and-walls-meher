var bullet,wall;
var speed,weight;


function setup() {
  createCanvas(1600,800);

  speed = random(55,90);
 weight = random(400,1500);
thickness = random(22,83);

 bullet= createSprite(500, 200, 50, 5);
 bullet.velocityX = speed;
 bullet.shapecolor = color(255);

 wall= createSprite(1200, 200, thickness,height/2);
 wall.shapecolor = color(80,80,80);
}

function draw() {

 
  background(255,255,255); 
  
  
  if(wall.x-bullet.x <(bullet.width+wall.width)/2)
  {
    bullet.velocityX=0;
    var damage=0.5 * weight * speed*speed/(thickness/thickness/thickness);

    if(damage>10)
    {
      wall.shapeColor=color(255,0,0);
    }

    if (damage<10)
    {
      wall.shapeColor=color(0,250,0);
    }
  }
  drawSprites();
}