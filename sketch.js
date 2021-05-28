var car;

var wall;

function setup() {
  createCanvas(800, 800);
  car = createSprite(100,400,50,50);
  wall = createSprite(700,400,40,40);
}

function draw() {
  background(220);

  car.x=World.mouseX;
  car.y=World.mouseY;
  
  if(car.x-wall.x<wall.width/6+car.width/6 &&
    wall.x-car.x<car.width/6+wall.width/6 &&
    car.y-wall.y<wall.height/6+car.height/6 &&
    wall.y-car.y<car.height/6+wall.height/6)
    {car.shapeColor="red";
  
  }

  if(car.x-wall.x<wall.width/5+car.width/5 &&
    wall.x-car.x<car.width/5+wall.width/5 &&
    car.y-wall.y<wall.height/5+car.height/5 &&
    wall.y-car.y<car.height/5+wall.height/5)
    {car.shapeColor="white";
  
  }

  if(car.x-wall.x<wall.width/4+car.width/4 &&
    wall.x-car.x<car.width/4+wall.width/4 &&
    car.y-wall.y<wall.height/4+car.height/4 &&
    wall.y-car.y<car.height/4+wall.height/4)
    {car.shapeColor="yellow";
  
  }

  if(car.x-wall.x<wall.width/3+car.width/3 &&
    wall.x-car.x<car.width/3+wall.width/3 &&
    car.y-wall.y<wall.height/3+car.height/3 &&
    wall.y-car.y<car.height/3+wall.height/3)
    {car.shapeColor="white";
  
  }

  if(car.x-wall.x<wall.width/2+car.width/2 &&
    wall.x-car.x<car.width/2+wall.width/2 &&
    car.y-wall.y<wall.height/2+car.height/2 &&
    wall.y-car.y<car.height/2+wall.height/2)
    {car.shapeColor="green";
  
  }

  

  else{car.shapeColor="white";
  wall.shapeColor="black";
  
  }
  drawSprites();
}