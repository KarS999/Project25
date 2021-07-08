
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject
var Paper, paperObject;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	Paper =new paper(300,600,50);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  Paper.display();
  keyPressed();

  drawSprites();
}

function keyPressed(){
 if(keyCode === UP_ARROW){

	Matter.Body.applyForce(Paper.body, Paper.body.position,{x:1, y:-100});
		}

 if(keyCode === LEFT_ARROW){
	 Matter.Body.applyForce(Paper.body, Paper.body.position,{x:-130,y:0});
 }
 if(keyCode === RIGHT_ARROW){
	 Matter.Body.applyForce(Paper.body, Paper.body.position,{x:130,y:0});
 }	 
 if(keyCode === DOWN_ARROW){
	 Matter.Body.applyForce(Paper.body, Paper.body.position,{x:0,y:100});
 }
}

