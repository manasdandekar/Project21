var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    music=loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(830,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "red";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "green";

    block3 = createSprite(510,580,200,30);
    block3.shapeColor = "blue";

    block4 = createSprite(725,580,200,30);
    block4.shapeColor = "yellow";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);

     ball.velocityX=5;
     ball.velocityY=5;
}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    if(ball.x<0){
        music.stop()
          ball.velocityX=3
      }else if(ball.x>800){
        music.stop()
          ball.velocityX=-3
      }
     
    if(ball.isTouching(block4)){
      music.play()
      ball.shapeColor="yellow";
      ball.bounceOff(block4);
      
    }
    
    else if(ball.isTouching(block3)){
      music.stop()
      movingSprite.shapeColor="blue";
      ball.bounceOff(block3);
     
    }
      
    else if(ball.isTouching(block2)){
      music.stop()
      ball.shapeColor="green";
      ball.bounceOff(block2)
    }
    
    else if(ball.isTouching(block1)){
      music.stop()
      ball.shapeColor="red";
      ball.bounceOff(block1);
    }
  
    if (ball.y<0){
      music.stop()
      ball.velocityY=3
    }
  
    
     
      drawSprites()
  }
//}
