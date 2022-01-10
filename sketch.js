
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var leftLine,rightLine;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
   
    var ball_option={
       isStatic:false,
	   restitution:0.3,
	   friction:0,
	   density:1.2
	   
	}
     ball=Matter.Bodies.circle(100,500,10,ball_option)
	 World.add(world,ball)
	
     ground=new Ground(width/2,670,width,20)
    
     leftLine=new Ground(1100,600,20,120)
     rightLine=new Ground(1400,600,20,120)

}

function keyPressed(){
   if (keyCode===UP_ARROW){
	   Matter.Body.applyForce(ball,ball.position,{x:30,y:-15})
   }
}

function draw() {
  rectMode(CENTER);
  background(0);
  ellipseMode(RADIUS) 
  fill("Green")
  ellipse(ball.position.x,ball.position.y,10)
  fill ("Blue")


ground.display()
fill("yellow")
leftLine.display()
rightLine.display()



































}



