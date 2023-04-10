let noiseMax = 1.5;
let zoff = 0;

let xoff1 = 0;
let xoff2 = 1000;

let x1 = 0;
let y1 = 0;

function setup() {
  createCanvas(800, 600);
}

function draw() {

  background(0);

  let x1 = map(noise(xoff1),0,1, -width/2, width/2);
  let y1 = map(noise(xoff2),0,1, -height/2, height/2);

 // translate(width / 2 + x1, height / 2 + y1  ); 
  xoff1 += 0.0004;
  xoff2 += 0.0004;

  /// with no noise in translation
  translate(width / 2 , height / 2 ); 

  beginShape();
  for (let a = 0; a < TWO_PI; a += 0.005) {

    let xoff = map(cos(a), -1, 1, 0, noiseMax);
    let yoff = map(sin(a), -1, 1, 0, noiseMax);

    let r = map(noise(xoff, yoff, zoff), 0, 1, 0, width * 0.8);

    let x = r * cos(a) + x1; // polar to cartesian 
    let y = r * sin(a) + y1;

    vertex(x, y);
  }
  endShape(CLOSE);
  zoff += 0.0009;

}
