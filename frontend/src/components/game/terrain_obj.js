class TerrainObject {
  constructor(options) {
    this.type = options.type;
    if (this.type == 'image' || this.type == 'background') {
      this.image = new Image();
      this.image.src = options.color;
    }
    this.width = options.width;
    this.height = options.height;
    this.vel = options.vel;
    this.pos = options.pos;
  }

  draw(ctx) {
    let [x, y] = this.pos;
    if (this.type == 'image' || this.type === 'background') {
      ctx.drawImage(this.image,
        x, y,
        this.width,
        this.height
      );
      if (this.type == 'background') {
        ctx.drawImage(
          this.image,
          x + this.width,
          y,
          this.width,
          this.height
        );
      }
    } else {
      ctx.fillstyle = this.color;
      ctx.fillRect(
        x,
        y,
        this.width,
        this.height
      );
    }
  }

  move() {
    let [x, y] = this.pos;
    let [dx, dy] = this.vel;

    if (this.type == "background") {
        if (x == -(this.width)) {
            x = 0;
        }
    }

    let newPos = [x + dx, y + dy];
    this.pos = newPos;

  }

  isCollidedWith(otherObject) {
    let [x, y] = this.pos;
    let [x2, y2] = otherObject.pos;

    let myleft = x;
    let myright = x + this.width;
    let mytop = y;
    let mybottom = y + this.height;

    let otherleft = x2;
    let otherright = x2 + otherObject.width;
    let othertop = y2;
    let otherbottom = y2 + otherObject.height;

    let crash = true;
    if ((mybottom < othertop) ||
      (mytop > otherbottom) ||
      (myright < otherleft) ||
      (myleft > otherright)) {
      crash = false;
    }

    return crash;
  }



}

export default TerrainObject;