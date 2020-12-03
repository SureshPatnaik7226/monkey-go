
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup, bananaGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
   createCanvas(400,400);
 monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;

  ground = createSprite(400,380,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
  
  bananaGroup= new Group ();
    obstacleGroup= new Group ();
}


function draw() {
background("light blue");
  
  if (ground.x<150) {
      ground.x= 200
    }   
  
 if (keyDown ("space")&& monkey.y>=355) {
      monkey.velocityY= -20;  
    }      
 monkey.velocityY= monkey.velocityY + 0.8;
  
   monkey.collide (ground);
  
   if (bananaGroup.isTouching(monkey)) {
      score= score+2;
      bananaGroup.destroyEach;
   }
     if (obstacleGroup.isTouching(monkey)) {
      score= score-1;
      obstacleGroup.destroyEach();
      monkey.scale= 0.1;
    }
  
   
  //calling user-defined functions
    spawnBananas();
    spawnObstacles()
     
   
drawSprites();
  
  var survivalTime = 0;
     stroke("white");
     textSize(20);
     fill("white");
     text("score: " + score, 500, 50);
     
     stroke("black");
     textSize(20);
     fill("black");
     survivalTime = Math.ceil(frameCount/frameRate());
     text("Survival Time: ", + survivalTime, 100, 50);
     
}
  function spawnBananas(){
    if (frameCount%90===0) {
    banana= createSprite (360,120,10,10);  
    banana.addImage ("banana.png", bananaImage);
    banana.scale= 0.06;
    banana.velocityX= -3;
   
       banana.lifetime= 150;
    
    //adding banana to banana group
      bananaGroup.add(banana);
  }
}  
function spawnObstacles () {
  if (frameCount%90===0) {
    obstacle= createSprite (270,370,10,10);
    obstacle.addImage ("obstacleimage", obstacleImage);
    obstacle.scale= 0.05;
    obstacle.velocityX= -4;
    
    //adding obstacle to obstacle group
      obstacleGroup.add(obstacle);
  }
}    
    
    