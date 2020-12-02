var wall,bullet
var thickness 
var speed 
var weight;

function setup(){
createCanvas(1600,400);

thickness=random(22,83)
speed=random(223,321)
weight=random(30,52)

bullet=createSprite(50,200,50,50);
bullet.velocityX=speed;

wall=createSprite(1200,200,thickness,height/2);
    
}

function draw(){
background("Yellow");
    
    
if(hasCollided(bullet,wall))
    {
      bullet.velocityX=0;
        var damage=0.5*weight*speed*speed/(thickness *thickness*thickness)
        if(damage>10)
        {
            wall.shapeColor=color(255,0,0);
        }
        if(damage<10)
        {
            wall.shapeColor=color(0,255,0);
        }
        
    }
    hasCollided(bullet,wall);
      drawSprites();

     

}

function hasCollided(gbullet,gwall)
{
    bulletRightEdge=gbullet.x+gbullet.width;
    wallLeftEdge=gwall.x
    if(bulletRightEdge>=wallLeftEdge)
    {
    return true;
    }
    return false;
}