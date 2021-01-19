const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var plinkos=[];
var particles=[];
var divisions=[];
var divisionHeight=300;
function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(480,800);
  ground1=new Ground(240,790,500,20);
  for(var k=0;k <=width;k=k+80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight))
  }
    for(var h=100;h<=height-350;h=h+140){
        for(var p=60; p<=width; p=p+90){
          plinkos.push(new Plinko(p,h,20))
        }
    }
    for(var h=170;h<=height-350;h=h+140){
        for(var l=20; l<=width; l=l+90){
          plinkos.push(new Plinko(l,h,20))
        }
      }
}

function draw() {
  if(frameCount%90==0){
    particles.push(new Particle(random(30,370),50,10))
  }
  Engine.update(engine)
  background(0); 
  drawSprites();
  ground1.display();
  for(var k=0;k <divisions.length;k++){
    divisions[k].display();
  }
  for(var f=0; f<plinkos.length;f++){
    plinkos[f].display();
  }
  for(var p=0;p<particles.length; p++){
    particles[p].display()
    }
}