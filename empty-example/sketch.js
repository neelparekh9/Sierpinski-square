var x1,y1;
var x2,y2;
var x3,y3;
var x4,y4;
var x,y;

function setup() {
  frameRate(200);
  // put setup code here
  createCanvas(700,700);
  console.log('Sierpinski Quadrilateral');

  //select three points on canvas, randomly
    x1 = 50;
    y1 = 50;
    x2 = 450;
    y2 = 50;
    x3 = 50;
    y3 = 450;
    x4 = 450;
    y4 = 450;
    //starting random point
    x = random(700);
    y = random(700);

    background(0);
    strokeWeight(2);
    x1=x1*3;
    y1=y1*3;
    x2=x2*3;
    y2=y2*3;
    x3=x3*3;
    y3=y3*3;
    x4=x4*3;
    y4=y4*3;
}

function draw() {
  stroke(0,255,255);
  point(x,y);
  var dice = floor(random(4));
  if(dice==0)
  {
    x = floor((x+x1)/3);
    y = floor((y+y1)/3);
  }
  else if (dice==1) {
    x = floor((x+x2)/3);
    y = floor((y+y2)/3);
  }
  else if (dice==2) {
    x = floor((x+x3)/3);
    y = floor((y+y3)/3);
  }
  else if (dice==3)
  {
    x = floor((x+x4)/3);
    y = floor((y+y4)/3);
  }

}
