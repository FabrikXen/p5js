let img_K;
let img_I;
let img_D;
let img_Z;

let angle = 0;

function preload() {
  img_K = loadImage('K.jpg');
  img_I = loadImage('I.jpg');
  img_D = loadImage('D.jpg');
  img_Z = loadImage('Z.jpg');
}

function setup() {
  createCanvas(710, 600, WEBGL);
}

function draw() {
  background(0,0,0,0);

  ambientMaterial(255);
  directionalLight(255, 0, 0, 0 , 0, -10);
  
  translate(0, -height/6 * 2, 0);
  push();
  rotateZ(angle * 0.9);
  rotateX(angle * 0.6);
  rotateY(angle * 0.8);
  texture(img_K);
  box(70, 70, 70);
  pop();
 
  translate(0, height/6, 0);
  push();
  rotateZ(angle* 0.9);
  rotateX(angle * 1);
  rotateY(angle* 0.7);
  texture(img_I);
  box(70,70,70);
  pop();

  translate(0, height/6 , 0);
  push();
  rotateZ(-angle * 0.8);
  rotateX(-angle * 0.9);
  rotateY(-angle * 0.3);
  texture(img_D);
  box(70,70,70);
  pop();

  translate(0, height/6 , 0);
  push();
  rotateZ(angle * 0.8);
  rotateX(angle * 1.3);
  rotateY(angle * 0.5);
  texture(img_Z);
  box(70,70,70);
  pop();
  
  angle += 0.03;
}