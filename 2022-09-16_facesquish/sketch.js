let W = 800
let images = []

function preload() {
  images.push(loadImage('xvpFace1.jpg'))
  images.push(loadImage('xvpFace2.jpg'))
  images.push(loadImage('xvpFace3.jpg'))
  images.push(loadImage('xvpFace4.jpg'))
  images.push(loadImage('xvpFace5.jpg'))
  images.push(loadImage('xvpFace6.jpg'))
  images.push(loadImage('xvpFace7.jpg'))
}

function setup() {
  createCanvas(W, W);
        background(0);
}

function draw() {
  randomSeed(0) // sets seed for random()
  background(0);
  divide(0, 0, width, height, 4) // depth = 5
}

function divide(x, y, w, h, depth) {
  if (depth > 0) {
    const n = noise(w / width * 2, w / height * 2, frameCount / 800 * depth)
    if (depth-- % 2 === 1) {
      divide(x, y, w * n, h, depth)
      divide(x + w * n, y, w - w * n, h, depth)
    } else {
      divide(x, y, w, h * n, depth)
      divide(x, y + h * n, w, h - h * n, depth)
    }
  } else {
    image(random(images), x, y, w, h, 0, 0)
  }

}