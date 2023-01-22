const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var left;
var right;
var top_wall;
var ball;
var ground;
var btn1; 
var trash1;
var trash2;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  
  world = engine.world;
  
  btn1 = createImg("push.png");
  btn1.position(220,30);
  btn1.size(50,50);
  btn1.mouseClicked(hForce);
  

  
  ground = new Ground(200, 390, 1600, 20);
  right = new Ground(790, 200, 20, 400);
  left = new Ground(10, 200, 20, 400);
  top_wall = new Ground(200, 10, 1600, 20);
  trash1 = new Ground(600, 390, 20, 200);
  trash2 = new Ground(710, 390, 20, 200);

  var ball_options = {
    restitution:0.95 
  }

  ball = Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{
  background(51);
  Engine.update(engine);

  ellipse(ball.position.x,ball.position.y,20);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  trash1.show();
  trash2.show();
}

function hForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
}

function vForce(){
  Matter.Body.applyForce(ball,{x:0, y:0},{x:0,y:-0.05});
}