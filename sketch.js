//Estados del Juego
var PLAY=1;
var END=0;
var gameState=1;

var sponge,plate,cat,dog,plateGroup,petsGroup, score,r,randomPlate,position;
var spongeImage , pet1Img, pet2Img ,plate, gameOverImage;
var gameOverSound;

var score = 0;
var lifes = 3;

function preload(){
  backgroundImg = loadImage("bg2.png");
  spongeImage = loadImage("sponge.png");

  moneyImg = loadImage("Money.png");
  angryImg = loadImage("angryChef.png");
}

function setup() {
  createCanvas(800, 600);
  background(0);
  
  //Esponja 
  sponge = createSprite(200,200,20,20);
  sponge.addImage(spongeImage);
  sponge.scale = 0.1;
  sponge.setCollider("circle",0,0,230);

  //Money
  money = createSprite(565,40,20,20);
  money.addImage(moneyImg);
  money.scale = 0.1;

  //Chef molesto
  angry = createSprite(180,120,20,20);
  angry.addImage(angryImg);
  angry.scale = 0.3;
  angry.visible = false;
  
  
}

function draw() {
  background(255);
  background(backgroundImg);
  //Movimiento de esponja
  sponge.y = World.mouseY;
  sponge.x = World.mouseX;
  
  
  textSize(25);
  fill(255);
  text("Dinero: $"+score,600,50);
  text("Intentos: "+lifes,400,50);
  drawSprites();
 
}


function pets(){
  
}

function showPlates(){
  
}