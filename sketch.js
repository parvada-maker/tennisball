var box1,box2;
function setup()
{createCanvas(windowWidth,windowHeight);
box1=createSprite(200,200);
box2= createSprite(200,200)
}
function draw()
{background("white")
box2.x=World.mouseX;
box2.y=World.mouseY; 
console.log(box1.x-box2.x);
drawSprites();
}