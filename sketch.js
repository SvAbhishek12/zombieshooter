
function preload(){
  bgImg=loadImage("assets/bg.jpeg")
  playerImg=loadImage("assets/shooter_2.png")
  shooterImg=loadImage("assets/shooter_3.png");

}

function setup(){
  createCanvas(windowWidth,windowHeight)

  bg=createSprite(displayWidth/2,displayHeight/2,20,20);
  bg.addImage(bgImg)


  // creating the player sprite
  player = createSprite(displayWidth-1160,displayHeight-300,50,50);
  player.addImage(playerImg);
  player.scale=0.3
}




function draw(){
  background(0);

// to move the player according to arrow up and down.
  if(keyDown("UP_ARROW")){
    player.y=player.y-30;   
  }
  if(keyDown("DOWN_ARROW")){
    player.y=player.y+30;
  }
  // shoot position when user is going to press space bar.
  if(keyWentDown("space")){
    player.addImage(shooterImg);
  }
  // back to normal position when user is going to release the space bar.
  if(keyWentUp("space")){
    player.addImage(playerImg);
  }

  drawSprites(); 
}