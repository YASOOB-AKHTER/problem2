var player;
var enemy1,enemy2,enemy3,enemy4,boss;
var object1,object2,brick;
var ground;
var backplay;
var clouds;
var gamestates;
function preload(){     
  backgroundimg=loadImage("background.jpg");
player1img=loadAnimation("w1.png","w2.png","w3.png","w4.png","w5.png","w6.png","w7.png","w8.png","w9.png","w10.png","w11.png","w12.png","w13.png","w14.png");
 
}
function setup() {
  createCanvas(1450, 560);
 
  ground=createSprite(400,525,100000,40);
  player1=createSprite(120,400,30,80);
  player1.addAnimation("player1img",player1img);
  object2=createSprite(1350,400,30,80);
}

function draw() {
  background(backgroundimg);

  drawSprites();
if (keyWentDown("SPACE")){
player1.velocityX=3;
};
if (KeyWentUp("SPACE")){
  player1.velocityX=0;
};
 
 }  



  