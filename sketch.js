const Engine = Matter.Engine
const World = Matter.World
const   Bodies = Matter.Bodies
var box1,box2,box3,box4
var ground
var bird1
var pig1
var BImg
function preload(){
BImg = loadImage("sprites/bg.png")
}
function setup() {
  createCanvas(windowWidth,windowHeight);
engine = Engine.create()
world=engine.world
ground = new Ground(600,height,1200,20)

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350,50,50);
    log1 = new Log(810,260,20,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220,50,50);

    log3 =  new Log(810,180,20,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,20,150, PI/7);
    log5 = new Log(870,120,20,150, -PI/7);

    bird = new Bird(100,100,50,50);
}

function draw() {
  Engine.update(engine)
  background(BImg); 
  box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
}