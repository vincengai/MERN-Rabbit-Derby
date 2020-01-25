class Rabbit {
  constructor(options) {
    this.width = options.width;
    this.height = options.height;
    this.pos = options.pos;
    this.vel = options.vel;
    this.type = "image";
    this.image = new Image();
    this.image.src = "../assets/sprites/rabbit.jpg";
  }

  draw(ctx) {
    let [x, y] = this.pos;
    ctx.drawImage(this.image, x, y, this.width, this.height);
  }

  move() {
    let [x, y] = this.pos;
    let [dx, dy] = this.vel;
    this.pos = [x + dx, y + dy];
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

// module.exports = Bunny;
export default Rabbit;