var jim
var player
var ground
var obstacles

function preload(){

}

function setup(){
createCanvas(600,500)
jim = createSprite(100,450,80,80)
ground = createSprite(300,490,700,10)
}

function draw(){
background("gray")
spawnObstacles()
drawSprites()
}

function spawnObstacles(){
if(frameCount%20===0){
obstacles = createSprite(600,random(0,500),30,50)
obstacles.velocityX = -2;
}
}