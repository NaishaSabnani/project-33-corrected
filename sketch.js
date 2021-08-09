
var spriteRunning, spriteRunningImg
var spriteWalking, spriteWalkingImg
var bg, backgroundImg
var snowflake,snowFlakeImg
var bgMusic


function preload()
{
  bg="snow2.jpg"
  backgroundImg=loadImage(bg)
  spriteRunningImg=loadAnimation("images2/run1.png","images2/run2.png","images2/run3.png","images2/run4.png","images2/run5.png","images2/run6.png","images2/run7.png","images2/run8.png","images2/run9.png","images2/run10.png","images2/run11.png",)
  spriteWalkingImg=loadAnimation("images/walk1.png","images/walk2.png","images/walk3.png","images/walk4.png","images/walk5.png","images/walk6.png","images/walk7.png","images/walk8.png","images/walk9.png","images/walk10.png",)
  snowFlakeImg=loadImage("snow4.webp")
  bgMusic=loadSound("music.mp3")
  
}

function setup() {
  createCanvas(800,400);
  spriteWalking=createSprite(200, 300);
  spriteWalking.addAnimation("walking",spriteWalkingImg)
  spriteWalking.scale =0.5

  spriteRunning=createSprite(600,300)
  spriteRunning.addAnimation("running",spriteRunningImg)
  spriteRunning.scale =0.5

}

function draw() {
  background(backgroundImg);
  bgMusic.play();  

  edges= createEdgeSprites();
  spriteWalking.collide(edges);
  spriteRunning.collide(edges)

  spriteRunning.velocityX=-1
  spriteWalking.velocityX=1

 if(spriteRunning.isTouching(edges))
  {
    spriteRunning.x=350
    spriteRunning.velocityX=-1

  }

  if(spriteWalking.isTouching(edges))
  {
    spriteWalking.x=50
    spriteWalking.velocityX=1

  }

  if(frameCount%50===0)
    {
      
          spawnSnowFlakes();
        
      
  }


  
  drawSprites();
}

function keyPressed()
{
  if (keyCode===32)
  {
    if(frameCount%50===0)
    {
      
          spawnSnowFlakes();
        
      
  }

}
}
function spawnSnowFlakes()
{


snowflake = new snowFlake(180,40,30,30);

snowflake.addImage(snowFlakeImg);
    
      snowflake.velocityY=3
      
      snowflake.x=Math.round(random ( 50,750));
      snowflake.scale=0.05
      snowflake.lifetime=150
  
      
      snowflake.depth=spriteRunning.depth
      spriteRunning.depth=spriteRunning.depth+1
      snowflake.depth=spriteWalking.depth
      spriteWalking.depth=spriteWalking.depth+1

}