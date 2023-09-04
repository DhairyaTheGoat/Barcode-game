var jim,jimImg
var ground
var obstacles,obstacleImg
var platform

function preload(){
obstaclesImg = loadImage("Obstacles.png")
jimImg = loadImage("Stickman.png")
}

function setup(){
createCanvas(600,500)
jim = createSprite(100,450,80,80)
jim.addImage("Useless",jimImg)
ground = createSprite(300,490,700,10)
platform = createSprite(150,250,70,10)
}

function draw(){
background("gray")
spawnObstacles()

if(keyDown==="UP_ARROW"){
platform.y = platform.y + 3  
}

if(keyDown==="DOWN_ARROW"){
platform.y = platform.y - 3
}
drawSprites()
}

function spawnObstacles(){
if(frameCount%20===0){
obstacles = createSprite(600,random(0,500),30,50)
obstacles.addImage("obstacle",obstaclesImg)
obstacles.velocityX = -2;
}
}