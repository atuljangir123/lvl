var PLAY = 1;
var END = 0;
var gameState = PLAY;
var score;

var ball, ball1, ball2, ball3, ball4, ball5, ball6, ball7, ball8, ball9, ball10, paddle;
var level1;

function preload(){
  boxImg = loadImage("box.png");
  box1Img = loadImage("box1.png");
  paddleImg = loadImage("paddle.png");
  ballImg = loadImage("beachball.png");
}


function setup() {
  createCanvas(400, 400);
  
  level1 = createSprite(200,200,50,50)
  level1.shapeColor = "black"


  score=0;
 
 
}

function draw() {
  background("red");

  textSize(20);
  text("score:" +score,320,50)
 
  if(gameState === PLAY){

    Edge = createEdgeSprites();
    ball.bounceOff(Edge[0]);
    ball.bounceOff(Edge[1]);
    ball.bounceOff(Edge[2]);
    ball.bounceOff(paddle);

  paddle.x=World.mouseX;
  
  if(ball.isTouching(ball1)){
    ball1.destroy();
    score+=1
  }
  if(ball.isTouching(ball2)){
    ball2.destroy();
    score+=1
  }
  if(ball.isTouching(ball3)){
    ball3.destroy();
    score+=1
  }
  if(ball.isTouching(ball4)){
    ball4.destroy();
    score+=1
  }
  if(ball.isTouching(ball5)){
    ball5.destroy();
    score+=1
  }
  if(ball.isTouching(ball6)){
    ball6.destroy();
    score+=1
  }
  if(ball.isTouching(ball7)){
    ball7.destroy();
    score+=1
  }
  if(ball.isTouching(ball8)){
    ball8.destroy();
    score+=1
  }
  if(ball.isTouching(ball9)){
    ball9.destroy();
    score+=1
  }
  if(ball.isTouching(ball10)){
    ball10.destroy();
    score+=1
  }

  
  }
  if(ball.y >400){
    textSize(30);
    text("Game Over",200,200)
  }

  if(score===10){
    textSize(30);
    text("You Win",200,200)
    ball.destroy();
  }
  
  if(gameState === "serve"){
    if(keyDown(ENTER)){
      ball.velocityX = 3;
      ball.velocityY = 2;
      gameState=PLAY;
      }

     
    if( mousePressedOver(level1)){
    Level1();
    }
  }

    drawSprites();
    }


function Level1(){


  ball = createSprite(200,250,25,25);
  ball.scale=0.1;
  ball.addImage(ballImg);   
  ball1 = createSprite(20,50,25,25);
  ball1.addImage(boxImg);
  ball1.scale=0.12;
  ball2 = createSprite(80,50,25,25);
  ball2.addImage(box1Img);
  ball2.scale=0.12;
  ball3 = createSprite(130,50,25,25);
  ball3.addImage(boxImg);
  ball3.scale=0.12;
  ball4 = createSprite(180,50,25,25);
  ball4.addImage(box1Img);
  ball4.scale=0.12;
  ball5 = createSprite(230,50,25,25);
  ball5.addImage(box1Img);
  ball5.scale=0.12;
  ball6 = createSprite(20,100,25,25);
  ball6.addImage(boxImg);
  ball6.scale=0.12;
  ball7 = createSprite(80,100,25,25);
  ball7.addImage(box1Img);
  ball7.scale=0.12;
  ball8 = createSprite(130,100,25,25);
  ball8.addImage(boxImg);
  ball8.scale=0.12;
  ball9 = createSprite(180,100,25,25);
  ball9.addImage(box1Img);
  ball9.scale=0.12;
  ball10 = createSprite(230,100,25,25);
  ball10.addImage(boxImg);
  ball10.scale=0.12;

  paddle=createSprite(200,390,100,10)
  paddle.addImage(paddleImg);
}