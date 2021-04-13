var dog ,dogImg, happyDogImg, happyDog ,database,foodS, foodStock;
var feed ,addFood;
var fedTime , lastFed;
var foodObj;



function preload()
{
dogImg = loadImage("images/dogImg.png");
happyDogImg = loadImage("images/dogImg1.png");

}

function setup() {
  database = firebase.database();

	createCanvas(1000, 500);
 // foodObj = new Food();

  

   dog = createSprite(800,220,150,150);
   dog.addImage(dogImg);
   dog.scale = 0.25;

   

  feed = createButton(" Feed The Dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood = createButton(" Add the Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);
}


function draw() {  
background(46,139,87);


fedTime = database.ref("FeedTime");
fedTime.on("value",function(data){
lastFed = data.val();
})

fill(255);
textSize(20);
if(lastFed >= 12){
  text("Last Feed :" + lastFed % 12 + "PM",350,30 );
} else if(lastFed==0){
  text(" Last Feed : 12 AM",350,30);

}else{
  text("Last Feed:" + lastFed +"AM",350,30 );
}

//foodObj.display();

if(keyDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(happyDogImg);
}
  drawSprites();

  strokeWeight()
  stroke("white");
  fill("white");
  textSize(20);
  //text("Food Remaining:" + foodS, 190,250);
  //text("Note: Press the UP_ARROW key to feed Drago !" , 50,50);
  fill("white");
  textSize(10);
}

function readStock(data){
  foodS=data.val();
  foodObj.updateFoodStock();

}

function feedDog(){
  dog.addImage(happyDogImg);
  foodObj.updateFoodStock(foodObj.getFoodStock()-1)
   database.ref('/').update({
     Food: foodObj.getFoodStock(),
     FeedTime : hour()
   })

}
 function addFoods(){
   foodS ++;
   database.ref('/').update({
     Food: foodS
   })
 }
/*function writeStock (x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

  database.ref('/').update({
    Food: x 
  })


}*/
