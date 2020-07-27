
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1;
var box1,box2,box3;
var paperball;
var invisible;
//var slingshot;
function preload()
{
   
}

function setup() {
	createCanvas(800, 650);


	engine = Engine.create();
	world = engine.world;
	ground1 = new Ground(400,height,800,20);
	box1 = new dustbin(575,630,250,20);
	box2 = new dustbin(460,570,20,100);
	box3 = new dustbin(690,570,20,100);
	paperball1 = new paper(100,100,50);
	invisible = new invisibleobject(575,570,250,100);
    slingshot = new SlingShot(paperball1.body,{x:100,y:100})
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  ground1.display();
  box1.display();
  box2.display();
  box3.display();
  paperball1.display();
  invisible.display();
  slingshot.display();
  drawSprites();
 
}
//function keyPressed(){
	//if(keyCode === UP_ARROW){
	//Matter.Body.applyForce(paperball1.body,paperball1.body.position,{x:240,y:-240});
	//}
//}
//function mouseDragged(){
//	Matter.Body.setPosition(paperball.body,{x:mouseX,y:mouseY});
//}
//function mouseReleased(){
//  // slingshot.fly();
//}

