
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var mypaper,mypaperimage;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	mypaper=new Paper(400,400,25);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  
 // if(keyDown("space")){
//	mypaper.velocityX=-5;
 //   }


  groundObject.display();
  dustbinObj.display();
  mypaper.display();

  
  drawSprites();
}

