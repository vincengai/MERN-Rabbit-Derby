class Rabbit {
  constructor(options) {
    this.width = options.width;
    this.height = options.height;
    this.pos = options.pos;
    this.vel = [0, 0]
    this.jumping = false;
    this.type = "image";
    this.image = new Image();
    this.image.src = "https://www.freepnglogos.com/uploads/rabbit-png/rabbit-png-transparent-images-png-only-15.png";
    // this.image.src = "https://i.imgur.com/3hj9ghB.png";
    // this.image.src = "../assets/sprites/rabbit.jpg";
    this.controller = {
      right: true,
      up: false,
      shift: false,
      left: true,

      keyListener: function (event) {
        var key_state = event.type == "keydown" ? true : false;

        switch (event.keyCode) {
          case 32: // up key
            this.controller.up = key_state;
            break;
          case 39: // right key
            this.controller.right = key_state;
            break;
          case 16: // shift key
            this.controller.shift = key_state;
        }
      }
    };
    window.addEventListener("keydown", this.controller.keyListener.bind(this));
    window.addEventListener("keyup", this.controller.keyListener.bind(this));
  }

  draw(ctx) {
    let [x, y] = this.pos;
    ctx.drawImage(this.image, x, y, this.width, this.height);
  }

  jump() {
    if (this.pos[1] < this.startJump) {
      this.jumping = false;
      return;
    } else {
      this.vel[1] += 1;
    }
  
    let [x, y] = this.pos;
    let [dx, dy] = this.vel;
    this.pos = [x + dx, y + dy];
    this.jump();
  }
  
  move() {
    // JUMP FUNCTION
    if (this.controller.up && !this.jumping) {
      this.jumping = true;
      this.controller.up = false;
      this.vel[1] -= 7.5;
    } else if (this.jumping) {
      this.vel[1] += 0.25;
    }
    
    let [x, y] = this.pos;
    let [dx, dy] = this.vel;
    this.pos = [x + dx, y + dy];


    // MOVING RIGHT FUNCTION
    // if (this.controller.right || !this.controller.right) {
    //   this.vel[0] += 0.005; // += is for smoother graphics than a set constant, MIGHT HAVE A CONSTANT X VELOCITY TO PREVENT INCREASE OF SPEED
    // }

    // Collision detection, in regards to falling onto the "floor" and landing
    if (this.pos[1] > 280 - 16 - 32) {
      // 180 being the very bottom of your screen
      this.jumping = false; // -60 being the location of the rendered floor, this number is subject to change in terms of Object floor
      this.pos[1] = 280 - 16 - 32; // -32 being the top coordinate of the Object, this number is subject to change in terms of the Object
      this.vel[0] = 0;
      this.vel[1] = 0;
    } // Set Jumping to False, to allow jump again, Y coordinate to equal position to update current POS, yVelocity to 0 because youre hitting floor

    // Y-axis decay, Updating X & Y Current Position in terms of
    // this.vel[1] += 1; // gravity, adds 1.5 per every frame of animation, w/o this the Object will never fall
    // this.pos[0] += 1; // Adds x velocity to current POS
    // this.pos[1] += this.vel[1]; // Adds y velocity to current POS
    // this.vel[1] *= 0.5; // friction,  gives effect of slowing down, allows friction on Y axis
    // rabbit.xVelocity *= 0.9; // friction, gradually reduces velocity, slowly reduces to 0, giving the effect of slowing down
  }

  isCollidedWith(otherObj) {
    let [x1, y1] = this.pos;
    let [x2, y2] = otherObj.pos;

    let myLeft = x1;
    let myRight = x1 + this.width;
    let myTop = y1;
    let myBottom = y1 + this.height;

    let otherLeft = x2;
    let otherRight = x2 + otherObj.width;
    let otherTop = y2;
    let otherBottom = y2 + otherObj.height;

    let crash = true;
    if ((myBottom < otherTop) ||
      (myTop > otherBottom) ||
      (myRight < otherLeft) ||
      (myLeft > otherRight)) {
      crash = false;
    }
    return crash;
  }
}

export default Rabbit;