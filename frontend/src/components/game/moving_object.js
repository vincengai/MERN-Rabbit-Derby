const Util = require("./util");

function MovingObject(options) {
  this.pos = options.pos;
  this.vel = options.vel;
  this.radius = options.radius;
}

MovingObject.prototype.collideWith = function collideWith(otherObject) {
  // empty by default
}

MovingObject.prototype.draw = function draw(ctx) {
}

MovingObject.prototype.isCollidedWith = function isCollidedWith(otherObject) {
  const centerDist = Util.dist(this.pos, otherObject.pos);
  return centerDist < (this.radius + otherObject.radius);
}

MovingObject.prototype.move = function move(timeDelta) {
  // empty by default
}

module.exports = MovingObject;