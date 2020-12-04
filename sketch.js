//Create variables here
var dog , dogImg
var happyDog , happyDogImg
var database
var foodS = 0
var foodStock

function preload()
{
  //load images here
  dogImg = loadImage("Dog.png")
happyDogImg = loadImage("happydog.png")  
}

function setup() {
  createCanvas(500,500);
  database = firebase.database()
  dog = createSprite(200,200,5,5)
  dog.scale = 0.5
  dog.addImage(dogImg)
foodStock = database.ref('Food').on("value", readStock)
}


function draw() {  
  //add styles here
background(47,139,83)
if(keyDown (UP_ARROW)){
foodS = foodS +3
writeStock(foodS)
dog.addImage(happyDogImg)
}
if(frameCount%50 === 0){
foodS = foodS -1
writeStock(foodS);
}
fill("red")
text("Press up arrow to feed Ariana Guru's Milk" , 200,20)
text(foodS,200,40)
drawSprites();
}

function readStock(data){
foodS = data.val()
}

function writeStock(x){
database.ref('/').update({
Food : x
})
}
