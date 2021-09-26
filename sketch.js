const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ball;
var blower;
var blowerMouth;
var button;

function setup() {
  var canvas = createCanvas(500, 500);

  engine = Engine.create();
  world = engine.world;
//create a object for ball
ball = Bodies.circle(50,200,20)
//create a object for blower
blower = createSprite(200,50,20)
//create a object for blowerMouth
blowerMouth = createSprite(195,45,15)

  btn2 = createImg('click.png');
btn2.position(20,30);
btn2.size(50,50);
//add the mouseClicked option 
}
 
function draw() {
  background(59);
  Engine.update(engine);

  blower.show();
  ball.show();
  blowerMouth.show();

  mouseClicked(){
    if(mousePressed(button)){
      blow();
    }
  }
}

function blow() {
  //add the applyforce
  ball.applyForce({x:0},{y:50})
}



 

