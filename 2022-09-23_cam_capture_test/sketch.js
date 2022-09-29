let cam;
let angle = 0;

function setup() {
  createCanvas(500, 400, WEBGL);
  cam = createCapture(VIDEO);
  cam.size(320, 240);
  //capture.hide();
}

function draw() {
  // let dx = mouseX - width / 2;
  // let dy = mouseY -height / 2;
  // let v = createVector(dx,dy,0);
  // v.div(100);

  directionalLight(255, 0, 0, 0, 0, -1);
  pointLight(0, 0, 255, 10, 20, 0);
  //directionalLight(0, 250, 0, 0, 0, -1);
  background(0);
  noStroke();
  
  push();
  
  rotateX(-PI);
  rotateZ(PI);
  //rotateY(angle);
  //rotateZ(angle * 1.2);
  texture(cam);
  sphere(170);
  pop();

  // translate( 0, 200);
  // rotateX(HALF_PI); // roatate 90 degs
  // ambientMaterial(255);
  // plane(500,240);

  angle += 0.03;
  
} 