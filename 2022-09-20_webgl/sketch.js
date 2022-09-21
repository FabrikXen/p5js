let angle = 0;

function setup() {
  createCanvas(400, 300, WEBGL);
}


function draw() {
  background(175);

  // 1.ambient light:
  //ambientLight(0,0,255); // ambient material only refelcts colour of ,etarial
 //// ambient light shines from everywhere 

//  // 2.point light:
//  // coordinate system centered at center! 
//  // blue light from left side:
//   pointLight( 0, 0, 255, -width/2 - 100, 0, 0); // from a point 
//   // red from right side:
//   pointLight( 255, 0, 0, width/2, 0, 0);

  // 3. directional light:
  // // coming from vector (-1,0,0) 
  //directionalLight(255,255,0, -1, 0, 0);

  let dx = mouseX - width/2;
  let dy = mouseY - height/2;
  let v = createVector( dx,dy,0);
  v.normalize(); // shrinks vector to 1

  directionalLight(255,255,0,dx,dy,v);


  rotateX( angle);
  rotateY( angle * 0.3);
  rotateZ( angle * 1.2);

  //fill( 200, 0, 255);
  // normalMaterial(); // adssignes colour to each vertex red to x value
  
  //ambientMaterial(255); // material that refelcts light-> needs light to not be black
  // ambientMaterial reflects light 

  specularMaterial(255); //metallic material 
  noStroke(0);
  torus(100,20);

  angle += 0.03;
 

  
}
