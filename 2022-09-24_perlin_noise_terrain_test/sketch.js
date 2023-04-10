var cols, rows;
var scl = 2;
var w = 3000;
var h = 1000;
var zoff = 0;
var inc = 0.3; // increase and make cubes more irregular
var zinc = 0.008; // speed
var start = 0;
var minVal = 0;
var maxVal = 300; // size of cube
var startInc = 0;

let angle = 0;

function setup() {
  createCanvas(500, 500, WEBGL);
  cols = w / scl;
  rows = h / scl;
}

function draw() {
  background(0);
  noStroke();
  stroke(255);
  fill(255,0,176,15);
  
  rotateX(PI/3);
  //translate(-w/2, -h/2);
  
  let yoff = -start;
  for (let y = 0; y < rows - 1; y++) {

    let xoff = 0;
    for (let x = 0; x < 1; x++) {
    
      box(map(noise(xoff,yoff,zoff), 0, 1, minVal, maxVal));
     
      // // for sphere:
      // //noStroke();
      // fill(map(noise(xoff,yoff,zoff), 0, 1, 0, 25),map(noise(xoff,yoff,zoff), 0, 1, 10, 255),90,20);
      // rotateZ(angle);
      // sphere( map(noise(xoff,yoff,zoff), 0, 1, 0, 500),10,100);

      //// for cube: 
      strokeWeight(2);
      //stroke( map(noise(xoff,yoff,zoff), 0, 1, 0, 255),20,0);

      xoff += inc;
    }
    yoff += inc;
    
  }
  angle += 0.005;

  zoff += zinc;
  //start += startInc;
}
