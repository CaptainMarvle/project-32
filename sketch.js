const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ground;
var stand1, stand2;
var polygon;
var slingShot;
var polygon_img;
var score = 0;
//var backgroundImg;
//var bg;

function preload(){

polygon_img = loadImage("polygon.png")
//getBackgroundImg();

}

function setup(){

  createCanvas(900, 400)

 engine = Engine.create();
 world = engine.world;
 Engine.run(engine);

 

ground = new Ground(450,390,900,20);
stand1 = new Stand(390,265,200,10);
stand2 = new Stand(690,205,200,10);

block1 = new Box(330,235,30,40);
block2 = new Box(360,235,30,40);
block3 = new Box(390,235,30,40);
block4 = new Box(420,235,30,40);
block5 = new Box(450,235,30,40);

block6 = new Box(360,195,30,40);
block7 = new Box(390,195,30,40);
block8 = new Box(420,195,30,40);

block9 = new Box(390,155,30,40);

block10 = new Box(637,175,30,40);
block11 = new Box(667,175,30,40);
block12 = new Box(697,175,30,40);
block13 = new Box(727,175,30,40);
block14 = new Box(757,175,30,40);

block15 = new Box(667,135,30,40);
block16 = new Box(697,135,30,40);
block17 = new Box(727,135,30,40);

block18 = new Box(697,95,30,40);

polygon = Bodies.circle(50,200,20);
World.add(world,polygon);

slingShot = new Slingshot(this.polygon,{x:100, y:200});


}

function draw(){
// if(background){
//    background("dayImage.jpg");
//    noStroke();
//    textSize(35)
//    fill("Black")
//    text("Score  " + score, 750, 40)

//    textSize(20);
//    fill("Black");
//    text("Drag the polygon to destroy the blocks :)",300,30);
//    textSize(15);
//    text("Press Space to get a second Chance to Play!!",300 ,50);
//   }

//    else{

//    background("nightImage.jpg")

//    textSize(35)
//    fill("white")
//    text("Score " + score, 750, 40)

//    textSize(20);
//    fill("white");
//    text("Drag the polygon to destroy the blocks :)",300,30);
//    textSize(15);
//    text("Press Space to get a second Chance to Play!!",300 ,50);


//  }
background("black");

 noStroke();
 textSize(35);
 fill("white");
 text("Score : " + score, 750, 40)

 textSize(20);
   fill("white");
    text("Drag the polygon to destroy the blocks :)",300,30);
    textSize(15);
    text("Press Space to get a second Chance to Play!!",300 ,50);

//text(mouseX + ',' + mouseY, 10, 15);


//Engine.update(engine);

ground.display();
stand1.display();
stand2.display();
strokeWeight(2);
stroke(15);
fill("skyblue");
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
fill("pink");
block6.display();
block7.display();
block8.display();
fill("orange")
block9.display();

fill("orange");
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
fill("pink");
block15.display();
block16.display();
block17.display();
fill("skyblue")
block18.display();

imageMode(CENTER)
image(polygon_img ,polygon.position.x, polygon.position.y,40,40 )

//polygon.display();

slingShot.display();

block1.score();
block2.score();
block3.score();
block4.score();
block5.score();
block6.score();
block7.score();
block8.score();
block9.score();

block10.score();
block11.score();
block12.score();
block13.score();
block14.score();
block15.score();
block16.score();
block17.score();
block18.score();

}

function mouseDragged(){

    Matter.Body.setPosition(this.polygon, {x: mouseX, y: mouseY});
}

function mouseReleased(){

    slingShot.fly();
}

function keyPressed(){
    if(keyCode == 32){
        slingShot.attach(this.polygon);
    }
}




// async function getBackgroundImg(){
//   var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
//   var responseJSON = await response.json();

//   var datetime = responseJSON.datetime;
//   var hour = datetime.slice(11,13);
    
//   if(hour>=06 && hour<=19){
//      bg = "dayImage.jpg";
//     }
//   else{
//      bg = "nightImage.jpg";
//     }

//  backgroundImg = loadImage(bg);
//  console.log(backgroundImg);
  //}