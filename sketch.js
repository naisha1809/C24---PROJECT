
var rect1;
var ground;
var paper1;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,500,800,20);

	rect1 = new Dustbin(555,435,20,100);
	rect1.shapeColor = "pink";
	rect2 = new Dustbin(635,475,180,20);
	rect2.shapeColor = "pink";
	rect3 = new Dustbin(735,435,20,100);
	rect3.shapeColor = "pink";

	paper1= new Paper(200,200,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  paper1.display();

  rect2.display();
  rect1.display();
  rect3.display();

  

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(paper1.body,paper1.body.position,{x:50,y:-50})
	   
	 }
	 
   }

