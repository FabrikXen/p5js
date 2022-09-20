let img1;
let img2;
let img3;

function preload(){
 img1 = loadImage('kidz.jpg');
 img2 = loadImage( 'tongue.jpg');
 img3 = loadImage('spiral.jpg');
 img4 = loadImage( 'text.jpg'); 
 img5 = loadImage('facedrawing.jpg');
  
}

function setup() {
  createCanvas(600, 600, WEBGL);
  // angleMode(DEGREES);
}

function draw() {
  background(0); 
  
  rotateX(frameCount *0.005); // rotation around x axis by angle frameCount*0.01 
  rotateY(frameCount * 0.01); // rotation around y axis 
  
  push();
  translate(0,0,100);// forward by 100
 	texture(img1);
  noStroke();
  plane(200,200);
  pop();
  
  push();
 	texture(img2);
  
  translate(0,100, 0); // right 100
  rotateX(HALF_PI);
  noStroke()
  plane(200,200);
  pop();
  
  push();
 	texture(img3);
  translate(100,0, 0);
  rotateY(HALF_PI);
  noStroke();
  plane(200,200);
  pop();

  
  push();
 	texture(img4);
  translate(-100,0, 0); 
  rotateY(HALF_PI);
  noStroke();
  plane(200,200);
  pop();

  
}
