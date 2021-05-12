const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var stoneObj,rubberObj,ironObj;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);

  stoneObj = new Stone(600,200);
  ironObj = new Iron(200,300);
  rubberObj = new Rubber(250,200,50)


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
rubberObj.display();
    stoneObj.display();
    ironObj.display();
    
 
}