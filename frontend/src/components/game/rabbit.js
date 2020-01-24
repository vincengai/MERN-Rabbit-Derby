const MovingObject = require("./moving_object");
const Util = require("./util");
const rabbit = require("../assets/sprite/rabbit.png");


Rabbit.RADIUS = 5;

function Rabbit(options) {
  options.pos = [0, 0];
  options.xVelocity = 1;
  options.yVelocity = 0;
  options.radius = Rabbit.RADIUS;
  options.image = "https://i.imgur.com/vvbTIR8.png";
  MovingObject.call(this, options);
}

const NORMAL_FRAME_TIME_DELTA = 1000 / 60;

Rabbit.prototype.move = function move(timeDelta) {
  const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA
  const offsetX = this.xVelocity * velocityScale;
  this.pos = [this.pos[0] + offsetX, this.pos[1]];
};

Rabbit.prototype.draw = function draw(ctx) {
  // Draw rabbit on ctx
};

Rabbit.prototype.accelerate = function accelerate() {

};

Rabbit.prototype.jump = function jump() {

};

module.exports = Rabbit;