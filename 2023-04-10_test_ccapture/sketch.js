// * num for amount of minutes
let numFrames = 3600 * 5;
let capture;

// for blob
let noiseMax = 1.5;
let zoff = 0;

let xoff1 = 0;
let xoff2 = 1000;

let x1 = 0;
let y1 = 0;

function setup() {

  // we need to create our canvas a bit differently than we've
  // done before this is so we can give it an 'id' that we can 
  // reference later when we record it, otherwise it will be 
  // hard to tel the capture library where to find our canvas
  let canvas = createCanvas(3840, 2160); // 4K 
  canvas.id('canvas');  // the id can be anything, but we reference it at
                        // the end of our draw()

  // formats include:
  // png, jpg, gif, and webm
  // name = name of folder (image files) or file (gif or video)
  capture = new CCapture( { format: 'png', name: 'blob_frames' } );

  // note: webm is probably Chrome-only, according to the docs :(
  // docs also note that gifs with a lot of frames may break

  // other useful options: add a little export progress widget 
  // and output details to the console
  // capture = new CCapture( { format: 'png', display: true, verbose: true });

  // ffmpeg -y -r 24 -i output/%06d.png -c:v libx264 
  // -profile:v high -crf 20 -pix_fmt yuv420p 
 //  MySweetVideo.mp4

 // add -s 540x540 for dimesion
 
 // Command used: 
 // ffmpeg -y -r 60 -s 3840x2160 -i blob_frames/%07d.png -c:v libx264 -profile:v high -crf 20 -pix_fmt yuv420p blobvid_5min.mp4
}

function draw() {
  // we have to start recording in draw() otherwise your sketch
  // won't work (but you won't get any errors) so we just start
  // on the first frame
  if (frameCount === 1) {
    capture.start();
    console.log('starting recording');
  }
  // and end when we've reached the # of frames desired
  if (frameCount === numFrames) {
    console.log('done recording');
    noLoop();
    capture.stop();   // stop recording
    capture.save();   // and prompt us to save the frames
    return;
  }

  ////// DRAW SOMETHING
  background(0);
  translate(width / 2 , height / 2 );

  let x1 = map(noise(xoff1),0,1, -width/4, width/4);
  let y1 = map(noise(xoff2),0,1, -height/4, height/4);

  xoff1 += 0.001;
  xoff2 += 0.001;

  beginShape();
  for (let a = 0; a < TWO_PI; a += 0.007) { // 0.005

    let xoff = map(cos(a), -1, 1, 0, noiseMax);
    let yoff = map(sin(a), -1, 1, 0, noiseMax);

    let r = map(noise(xoff, yoff, zoff), 0, 1, width/8, width);

    let x = r * cos(a) + x1; // polar to cartesian 
    let y = r * sin(a) + y1;

    vertex(x, y);
  }
  endShape(CLOSE);
  zoff += 0.0015; // 0.009

  ///// END OF DRAWING

  // capture the current state of the canvas every frame
  // (note this should be after you finish drawing stuff!)
  capture.capture(document.getElementById('canvas'));
}