
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin,paper,ground;


function preload()
{
	
	engine=Engine(create);
	world=engnine.world;
    dustbin=new dustbin(1200,650);
    paper=new paper(200,450,40);
	ground=new ground(1200,670,20,50);

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  display.paper();
  display.ground();
  display.dustbin();

  drawSprites();
 
}



