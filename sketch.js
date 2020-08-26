
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	var ground_options = {
		isStatic: true
	}

	ground = Bodies.rectangle(400,670,800,30,ground_options);
	World.add(world,ground);

	var roof_options = {
		isStatic: true
	}
	roof = Bodies.rectangle(400,50,200,30,roof_options);
	World.add(world,roof);

	bob1 = new Bob(400,300,20,20);
	bob2 = new Bob(330,300,20,20);
	bob3 = new Bob(260,300,20,20);
	bob4 = new Bob(470,300,20,20);
	bob5 = new Bob(540,300,20,20);


	rope1 =  new Rope(bob1.body,roof.body,bobDiameter*2,0);
	rope2 =  new Rope(bob2.body,roof.body,bobDiameter*2,0);
	rope3 =  new Rope(bob3.body,roof.body,bobDiameter*2,0);
	rope4 =  new Rope(bob4.body,roof.body,bobDiameter*2,0);
	rope5 =  new Rope(bob5.body,roof.body,bobDiameter*2,0);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,30)

  rectMode(CENTER);
  rect(roof.position.x,roof.position.y,200,30);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}