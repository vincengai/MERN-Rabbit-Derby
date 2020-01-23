const Util = require("./util");

function MovingObject(options) {
  this.pos = options.pos;
  this.xVelocity = options.xVelocity;
  this.yVelocity = options.yVelocity;
  this.radius = options.radius;
  this.game = options.game
}

MovingObject.prototype.collideWith = function collideWith(otherObject) {
  // empty by default
}

MovingObject.prototype.draw = function draw(ctx) {
  ctx.fillStyle = "#ff0";
  ctx.beginPath();
  ctx.arc(
    this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true
  );
  ctx.fill();
}

MovingObject.prototype.isCollidedWith = function isCollidedWith(otherObject) {
  const centerDist = Util.dist(this.pos, otherObject.pos);
  return centerDist < (this.radius + otherObject.radius);
}

MovingObject.prototype.move = function move(timeDelta) {
  // empty by default
}

module.exports = MovingObject;