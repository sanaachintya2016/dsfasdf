const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var ground;
var particle=[];
var pinko=[];
var division=[];
var divisionHeight = 300
function setup(){
  var canvas = createCanvas(800,900);
  engine = Engine.create();
  world = engine.world;


  ground = new Ground(200,890,2000,20);
  for(var k = 0; k<=width;k=k+80 ){
    division.push(new Division(k,height-divisionHeight/2,10,divisionHeight))
    
    }
    for (var j = 40; j<= width; j = j+50){
      pinko.push(new Pinko(j,90))
    }
    for (var j = 15; j<= width-10; j = j+50){
      pinko.push(new Pinko(j,190))
    }
    for (var j = 40; j<= width; j = j+50){
      pinko.push(new Pinko(j,290))
    }
    for (var j = 15; j<= width-10; j = j+50){
      pinko.push(new Pinko(j,390))
    }
    for (var j = 40; j<= width; j = j+50){
      pinko.push(new Pinko(j,490))
    }



 
}
function draw()
{
  background(0);
  text(mouseX + ',' + mouseY, 30, 45);

  Engine.update(engine);
  ground.display();
  if (frameCount%10===0){
    particle.push(new Partical(random(width/2-10,width/2+10),10,10))
  }
for(var j = 0 ; j<particle.length ; j++){
  particle[j].display()
}
for(var k = 0 ; k<division.length ; k++){
  division[k].display()
}
for(var l = 0 ; l<pinko.length ; l++){
  pinko[l].display()
}
    }

  

