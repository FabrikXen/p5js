let angle = 0;
let angle2 = 0;
let img_eye_l;
let img_eye_r;

function preload() {
  img_eye_l = loadImage("olivia_eye_L.jpg");
  img_eye_r = loadImage( "olivia_eye_R.jpg");
}

function setup() {
  createCanvas(800, 600, WEBGL);
}

function draw() {
  background(0);
  
  directionalLight(255, 0, 255, 0 , 0, -10);

  noStroke();
  ambientMaterial(255); // material that refelcts light-> needs light to not be black
  
  translate( sin(angle) * 50, -cos(angle) * 50, 0);
  
  translate( -width/4, 0, 0);
  push();
  rotateX( -angle);
  rotateY( -angle * 0.3);
  rotateZ( -angle * 1.2);
  texture(img_eye_l);
  sphere(70);
  pop();

  translate( -sin(angle) * 100, cos(angle) * 100, 0);

  translate( width/4 + width/4 , 0, 0);
  push();
  rotateX( -angle);
  rotateY( -angle * 0.2);
  rotateZ( -angle * 1.1);
  texture(img_eye_r);
  sphere(70);
  pop();

  // repeat: for four eye balls
  translate( -200 + sin(angle2) * 200, -cos(angle2) * 20, sin(angle2)*100);

  translate( 200 -width/4, 0, 0);
  push();
  rotateX( -angle);
  rotateY( -angle * 0.3);
  rotateZ( -angle * 1.2);
  texture(img_eye_l);
  sphere(40);
  pop();

  translate( -sin(angle2) * 200, cos(angle2)*200, cos(angle2) *20);

  translate( -300 + width/4 + width/4 , 0, 0);
  push();
  rotateX( -angle);
  rotateY( -angle * 0.2);
  rotateZ( -angle * 1.1);
  texture(img_eye_r);
  sphere(40);
  pop();

  angle2 += 0.01;
  

  angle += 0.03;
  
 
  
}

