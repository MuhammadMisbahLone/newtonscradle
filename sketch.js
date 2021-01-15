
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball1, slingShot;
var ball2, slingShot;
var ball3, slingShot;
var ball4, slingShot;
var ball5, slingShot;
var hanger;
var ball1;
var ball2;
var ball3;
var ball4;
var ball5;
function preload(){
	
}

function setup() {
	createCanvas(800, 700);
	
	engine = Engine.create();
	world = engine.world;
  
  hanger = new Hanger(400,200,200,20);
  ball1 = new Ball(440,300,20,20);
  ball2 = new Ball(400,300,20,20);
  ball3 = new Ball(360,300,20,20);
  ball4 = new Ball(320,300,20,20);
  ball5 = new Ball(200,300,20,20);
  sling1 = new SlingShot(ball1.body,{x:480,y:210});
  sling2 = new SlingShot(ball2.body,{x:440,y:210});
  sling3 = new SlingShot(ball3.body,{x:400,y:210});
  sling4 = new SlingShot(ball4.body,{x:360,y:210});
  sling5 = new SlingShot(ball5.body,{x:320,y:210});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  hanger.display();
  sling1.display(); 
  sling2.display(); 
  sling3.display(); 
  sling4.display(); 
  sling5.display(); 
}
function mouseDragged() {
  Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY});
}