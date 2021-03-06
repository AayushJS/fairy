var starImg,bgImg;
var star, starBody;
var fairyImg , fairySound ; 
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png")
    fairySound = loadSound("sound/JoyMusic.mp3")
}

function setup() {
	createCanvas(800, 600);
    fairySound.play();
		
	star = createSprite(650,30,10,10);
	star.addImage(starImg);
	star.scale = 0.2;

	fairy = createSprite(130,520,10,10)
	fairy.addAnimation("fairySister",fairyImg)
	fairy.scale = 0.2
	
	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  Engine.update(engine)
  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  
  ellipseMode(RADIUS)
 
if (star.y>470 && starBody.position.y>470)
 {
 Matter.Body.setStatic(starBody,true)
}

   drawSprites();
}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Body.setStatic(starBody,false); 
	}
	if (keyCode === LEFT_ARROW)
	{
		fairy.x = fairy.x-10
	}

	if (keyCode === RIGHT_ARROW)
	{
     fairy.x = fairy.x+10
	}
	
	
	
}
