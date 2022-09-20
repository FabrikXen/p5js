let W = 800
    let images = [] // array of images
    let bars = [] // array of bars
    let y = 0
    let yv = -1
    let totalHeight = 0


    function preload() {
      //images.push(loadImage('xvpface6.jpg'))
      images.push(loadImage('K.jpg'))
      images.push(loadImage('I.jpg'))
      images.push(loadImage('D.jpg'))
      images.push(loadImage('Z.jpg'))
    }

    function setup() {
      createCanvas(W, W);
      background(255)
      push()
      while (totalHeight < height * 1.5) { // total height starts at 0
        const bar = new HBar(totalHeight)
        bars.push(bar)
        totalHeight += bar.size
      }
    }

    function draw() {
      background(255)
      let h = 0
      yv = noise(frameCount / 100) * 20 - 10 
      for (let i = 0; i < bars.length; i++) {
        bars[i].update(yv)
      }
    }

    class HBar {

      constructor(y) {
        this.size = Math.abs(randomGaussian(W / 10, 100) + W / 10)
        // mean = Width /10, sd: 100 - most numbers returned are around the mean 
        this.rows = W / this.size + 1
        this.direction = random(100) > 50 ? -1 : 1 // 50 % chance left or right
        this.position = createVector(0, 0) //x component = 0, y component = 0 
        this.x = 0
        this.y = y // came from yv variable 
        this.v = random(3, 6) * this.direction
        this.image = images[bars.length % images.length]
        this.xoff = 0
      }

      update(yv) {
        this.y += yv
        this.xoff += 0.001 // original 0.001

        this.v = noise(this.xoff, this.y / 300) * 10 * this.direction
        this.x += this.v

        if (this.x > 0) {
          this.x -= this.size
        }
        if (this.x < -this.size) {
          this.x += this.size
        }

        if (this.y > height) {
          this.y -= totalHeight
        }
        if (this.y < -this.size) {
          this.y += totalHeight
        }

        for (let i = 0; i < this.rows; i++) {
          image(this.image, this.x + i * this.size, this.y, this.size, this.size)
        }

      }

    }
