const Util = require("./util");

function Rabbit(options) {
  this.pos = options.pos;
  this.vel = options.vel;
  this.radius = options.radius;
  this.game = options.game;
}

const NORMAL_FRAME_TIME_DELTA = 1000 / 60;
Rabbit.prototype.move = function move(timeDelta) {
  const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA
  const offsetX = this.vel[0] * velocityScale;
  const offsetY = this.vel[1] * velocityScale;

  this.pos = [this.pos[0] + offsetX, this.pos[1] + offsetY];
};

Rabbit.prototype.isCollidedWith = function isCollidedWith(otherObject) {
  const centerDist = Util.dist(this.pos, otherObject.pos);
  return centerDist < (this.radius + otherObject.radius);
};

Rabbit.prototype.draw = function draw(ctx) {
  // Draw rabbit on ctx
};

Rabbit.prototype.accelerate = function accelerate() {

};

Rabbit.prototype.jump = function jump() {

};