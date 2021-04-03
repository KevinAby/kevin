

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
     ground = new Ground(320,100,250,30)
     bob1 = new Bob(350,250,30,30)
     bob2 = new Bob(380,250,30,30)
     bob3 = new Bob(320,250,30,30)
     bob4 = new Bob(290,250,30,30)
     bob5 = new Bob(260,250,30,30)

     rope1 = new Rope(bob3.body,{x:320,y:100})
     rope2 = new Rope(bob1.body,{x:350,y:100})
     rope3 = new Rope(bob2.body,{x:380,y:100})
     rope4 = new Rope(bob4.body,{x:290,y:100})
     rope5 = new Rope(bob5.body,{x:260,y:100})
  
     Engine.run(engine);
  

}


function draw() {
 
  background(0);
  

  ground.display()
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()

  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()

   keyPressed()
  drawSprites();
 
}
function keyPressed() { 
	if (keyCode === 32) 
	{ Matter.Body.applyForce(bob5.body,bob5.body.position,{x:100,y:-100}); } 
} 



