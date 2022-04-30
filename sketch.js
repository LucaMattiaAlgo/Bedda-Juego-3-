var bedda, beddaImg, carne, carneImg, corazon, corazonImg;
var pilares, pilaresImg, bc, bcImg;
var pisoinv;
var obstaclesGroup;
var gameState = "play";
var meatGroup;

function preload(){
  beddaImg = loadImage("Bedda.png");
  carneImg = loadImage("carne.png");
  corazonImg = loadImage("Corazon.png");
  pilaresImg = loadImage("Pilar.png");
  bcImg = loadImage("bc.png");
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  bc = createSprite(500,500,1000,20);
  bc.addImage(bcImg);
  bc.scale=0.3;
  bedda = createSprite(70,530,100,50);
  bedda.addImage(beddaImg);
  bedda.scale = 1.7;
  pisoinv = createSprite(70,580,500,20);
  pisoinv.visible = false;
  obstaclesGroup = new Group();
  meatGroup = new Group();
}

function draw(){
  background("white");
  bedda.collide(pisoinv);
  
  if(gameState === "play"){
    bc.velocityX = -4;
    if(bc.x < 0 ){
      bc.x = (width/1.5);
    }
  
    if(keyDown("space") && bedda.y > 500){
      bedda.velocityY = -13;
    }
  
    if(keyDown("space")&& keyDown("c") && bedda.y > 500){
      bedda.velocityY = -17;
    }
  
  console.log(bedda.y);
    bedda.velocityY = bedda.velocityY + 0.5;
  }
  obstacles();
  meat();
  drawSprites();
  textSize(20);
  text("Pulsa espacio para saltar, combina esta tecla con el boton C para un super salto", 20,20);
}

function obstacles(){
  
  if(frameCount%100 === 0){
    var obstaculo = createSprite(width,500,50,100);
    obstaculo.velocityX = -10;
    obstaculo.addImage(pilaresImg);
    var rand = Math.round(random(1,2));
    switch(rand){
      case 1: 
        obstaculo.scale = 0.3; 
        break;
      case 2:
      obstaculo.scale = 0.6;
      break;
      default: break;
    }
    obstaclesGroup.add(obstaculo);
  }



}

function meat(){
  if(frameCount%150 === 0){
  carne = createSprite(width,Math.round(random(250,300)),50,50);
  carne.addImage(carneImg);
  carne.scale = 0.05;
  carne.velocityX = -8;
  meatGroup.add(carne);
  } 

}