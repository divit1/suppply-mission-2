var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var leftbody,rightbody,base;
var leftsprite,rightsprite,basesprite;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(1000, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	 Matter.Body.setAngle(leftbody,180)
	leftbody= Bodies.rectangle(400,100,100,10);
    leftsprite=createSprite( 300,300,20,PI/2);
   
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.1, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
  leftsprite.x=leftbody.position .x
  leftbody.y=leftbody.position.y
  drawSprites();
 
}

function keyPressed(){
	if (keyCode===DOWN_ARROW){
Matter.Body.setStatic(packageBody,false);
	}
}
    
  




