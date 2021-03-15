var ground,player,iground,background1,stone;

function preload(){
  background1 = loadImage("background.jpg")
  ground1 = loadImage("ground2.png")
  stoneimg = loadImage("stone3.png")
  jumpingAnimation = loadAnimation(
    'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/purpleNinja/jump00.png', 
    'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/purpleNinja/jump01.png', 
    'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/purpleNinja/jump02.png', 
    'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/purpleNinja/jump03.png', 
    'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/purpleNinja/jump04.png', 
    'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/purpleNinja/jump05.png', 
    'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/purpleNinja/jump06.png', 
    'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/purpleNinja/jump07.png', 
    'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/purpleNinja/jump08.png',     
    'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/purpleNinja/jump09.png'    
  );
  runningAnimation = loadAnimation(
    'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/purpleNinja/run00.png', 
    'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/purpleNinja/run01.png', 
    'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/purpleNinja/run02.png', 
    'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/purpleNinja/run03.png', 
    'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/purpleNinja/run04.png', 
    'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/purpleNinja/run05.png', 
    'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/purpleNinja/run06.png', 
    'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/purpleNinja/run07.png', 
    'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/purpleNinja/run08.png',     
    'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/purpleNinja/run09.png'    
  );
}


function setup(){
    createCanvas (1300,500)

    ground = createSprite (650,480,2600,50)
    ground.addImage(ground1)
    ground.velocityX=-4
    
    player = createSprite (100,430,10,80)
   // player.addAnimation("run",runningAnimation)
    player.addAnimation("jump",jumpingAnimation)
    player.shapeColor="blue"
    player.scale=3

    iground = createSprite (650,480,1300,15)
    iground.visible=false

}


function draw (){
    background(background1)
    //camera.position.x=player.x;
  //  camera.position.y=player.y;
    //console.log(ground.x)
      if (ground.x<0){
       ground.x=650
      }   
       player.velocityY=player.velocityY+0.3
       player.collide(iground)
      
       spwanstones();

 /*   if (player.y<420){
      player.changeAnimation("run",runningAnimation)
    }*/


    drawSprites();
}

 function keyPressed(){
   console.log (player.y)
  if (keyCode==UP_ARROW&&(player.y>350)){
    player.velocityY=-15
   // player.changeAnimation("jump",jumpingAnimation)
    console.log ("hello") 
  }  
 }


function spwanstones (){
  if (frameCount%240==0){
    var stone = createSprite(1200,425,50,50)
    stone.velocityX=-3
    stone.addImage("stone",stone)
  }
}

function reset (){
  if(stone.isTouching(player))
  gameState = End;
   if (gameState === END) {
    ground.velocityX = 0;
}
}