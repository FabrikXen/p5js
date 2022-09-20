let img1;
let img2;
let img3;

function preload(){
//  img1 = loadImage('kidz.jpg');
//  img2 = loadImage( 'tongue.jpg');
//  img3 = loadImage('spiral.jpg');
//  img4 = loadImage('facedrawing.jpg');
//  img5 = loadImage( 'text.jpg'); 

 // alternative cube faces: 
//  img1 = loadImage('../Photos_p5_content/blue.jpg');
//  img2 = loadImage('../Photos_p5_content/sinalco.jpg');
//  img3 = loadImage('../Photos_p5_content/bluegrass.jpg');
//  img4 = loadImage('../Photos_p5_content/maria.jpg');

// alternative 3: 
// img1 = loadImage('../Photos_p5_content/testtubes.jpg');
// img2 = loadImage('../Photos_p5_content/testtubes.jpg');
// img3 = loadImage('../Photos_p5_content/rational.jpg');
// img4 = loadImage('../Photos_p5_content/rational.jpg');

// alternative 4
img1 = loadImage('kidzI.jpg');
img2 = loadImage('kidzZ.jpg');
img3 = loadImage('orangeK.jpg');
img4 = loadImage('orangeD.jpg');
 
// img1 = loadImage('rock.jpg');
// img2 = loadImage('rock.jpg');
// img3 = loadImage('rock.jpg');
// img4 = loadImage('rock.jpg');
 
}

function setup() {
  createCanvas(600, 600, WEBGL);
  // angleMode(DEGREES);
}

function draw() {
  background(255,0,250); 
  
  rotateX(frameCount *0.01); // rotation around x axis by angle frameCount*0.01 
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
