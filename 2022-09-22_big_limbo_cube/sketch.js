let img1;
let img2;
let img3;

let images = [];

function preload() {
  images[0] = loadImage('BILIM.jpg');
  images[1] = loadImage('GBO.jpg');
  images[2] = loadImage('top.jpg');
}

function setup() {
  createCanvas(700, 500, WEBGL);
  angleMode(DEGREES);
}

const faces = [ // array of arrays ( contains cube faces colours)
  // xrotation, yrotation, zrotation
  [0,    0,   0],
  [0,   90,   0], // G part
  [90,   0,  0],    // top 
  
];

const edgeLength = 180;
const explodeFactor = 1; // increase for space inbetween planes (xploding effect)
const animationFrames = 300;
const transparency = 0.3;

function draw() {

  ambientMaterial(255);

  // Orange point light on the right:
  pointLight(150, 100, 0, 500, 0, 200);

  // Blue directional light from the left:
  directionalLight(0, 102, 255, -1, 0, 0);
  pointLight( 255,255,255, 0, 500, 200); 
  //pink pointlight from top:
  pointLight(255, 0, 170, 0, -300, 0);
  // Yellow spotlight from the front:
  pointLight(255, 255, 109, 0, 0, 300);

  const doneness = min(frameCount / animationFrames, 1); // donness fraction goes from 0 t0 1
  //background(250,0,50);
  background(0);
  noStroke();
  rotateY(frameCount * 0.5);
  rotateX(-20);
  rotateZ(10);
  
  let i = 0;
  faces.forEach( face => {
      //fill(`rgba(${face[3]}, ${transparency})`);
    texture( images[i]);
    push();
    [rotateX, rotateY, rotateZ].forEach((fn, i) => // for each function -> call it
     fn(face[i] * doneness)); // get portion of rotation angle 
    translate( 0, 0, edgeLength / 2 * explodeFactor * doneness);

    plane(edgeLength);
    pop();
    i++;
  });
}
