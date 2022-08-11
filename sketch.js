var rocket, rocketIMG;
var monster1, monster2, monsterIMG, monster2IMG, monstersGroup;
var sat, satIMG;
var rubi, rubi2, rubi3, rubiIMG, rubi2IMG, rubi3IMG;
var fundo, fundoIMG;

var score;
// var life;

function preload(){
  rocketIMG = loadImage("rocket.png");
  // monsterIMG = loadImage("monstrinho.png");
  // monster2IMG = loadImage("monstrinho2.png");
  // satIMG = loadImage("sats.png");
  rubiIMG = loadImage("rubi.png");
  rubi2IMG = loadImage("rubi2.png");
  rubi3IMG = loadImage("rubi3.png");
  fundoIMG = loadAnimation("background.PNG");
}

function setup(){
  createCanvas(500,500);
  
  fundo = createSprite(300,300);
  fundo.addAnimation("background", fundoIMG);
  fundo.velocityY = 2;

  rocket = createSprite(300,450, 25,25);
  rocket.addImage("rocket", rocketIMG);
  rocket.scale = 0.2;

  score = 0;

  rubiGroup = new Group();
  rubi2Group = new Group();
  rubi3Group = new Group();
}

function draw() {
  background(0);
  if(fundo.y > 200){
    fundo.y = 100
  } 

  rocket.velocityY = -0.5;

  rocket.x = World.mouseX;
  rocket.y = World.mouseY;

//  if(keyDown("left_arrow")){
//    rocket.velocityX = rocket.velocityX -1;
//    text.visible = false;
//  }
//  if(keyDown("right_arrow")){
//    rocket.velocityX = rocket.velocityX +1;
//    text.visible = false;
//  }

  // rubi.y = Math.round(random(100, 300));
  // rubi2.y = rubi.y;
  // rubi3.y = rubi.y;

  // if(rocket.isTouching(monster1)){
  //   life = life -1;
  // }
//   if(rocket.isTouching(monster2)){
// //    life = life -2;
//   }
//   if(rocket.isTouching(sat)){
// //    life = life -3;
//   }

if(rubiGroup.isTouching(rocket)){
  score = score+1;
  rocket.destroy();
  rubiGroup.destroyEach();
 }
 if(rubi2Group.isTouching(rocket)){
  score = score+1;
  rubi2Group.destroyEach();
 }
 if(rubi3Group.isTouching(rocket)){
  score = score+1;
  rubi3Group.destroyEach();
 }

  drawSprites();
 // fill ("red");
  // stroke = ("red");
  // textSize (20);
  // text ("Use as setas <-- e --> para jogar", 225,300);

  fill ("blue");
  // stroke = ("red");
  textSize (20);
  text ("score:" +score, 300,30);

  rubiG();
  rubi2G();
  rubi3G();

}

function rubiG(){ if(frameCount %60 === 0){
  rubi = createSprite(50, 300, 10, 40);
  rubi.addImage(rubiIMG);
  rubi.x = Math.round(random(30,580))
  rubi.velocityY= +(1 + score/10);
  rubi.scale = 0.1;
  rubi.lifetime = 140;
  rubiGroup.add(rubi); 
  } 
}

function rubi2G(){ if(frameCount %60 === 0){
  rubi2 = createSprite(50, 300, 10, 40);
  rubi2.addImage(rubi2IMG);
  rubi2.x = Math.round(random(30,580))
  rubi2.velocityY= +(1 + score/10);
  rubi2.scale = 0.1;
  rubi2.lifetime = 140;
  rubi2Group.add(rubi2); 
  } 
}

function rubi3G(){ if(frameCount %60 === 0){
  rubi3 = createSprite(50, 300, 10, 40);
  rubi3.addImage(rubi3IMG);
  rubi3.x = Math.round(random(30,580))
  rubi3.velocityY= +(1 + score/10);
  rubi3.scale = 0.1;
  rubi3Group.add(rubi3); 
  } 
}