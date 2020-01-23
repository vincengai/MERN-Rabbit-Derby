const Rabbit = require("./rabbit");
// const Trap = require("./trap");

function Game() {
  this.traps = [];
  this.rabbit = new Rabbit({ game: this });
  // this.add(new Rabbit({ game: this }))
}

// Window size
Game.DIM_X = 1000;
Game.DIM_Y = 600;

Game.prototype.add = function add(object) {
  if (object instanceof Rabbit) {
    this.rabbit = object;
  // } else if (object instanceof Trap) {
    // this.traps.push(object);
  } else {
    throw new Error("Unknown object");
  }
}

Game.prototype.objsExceptRabbit = function objsExceptRabbit() {
  return [].concat(this.traps);
};

Game.prototype.allObjects = function allObjects() {
  return [].concat([this.rabbit], this.traps);
};

Game.prototype.checkCollisions = function checkCollisions() {
  const rabbit = this.rabbit;
  const objsExceptRabbit = this.objsExceptRabbit();
  for (let i = 0; i < objsExceptRabbit.length; i++) {
    const object = objsExceptRabbit[i];
    if (rabbit.isCollidedWith(object)) {
      // if (object instanceof Trap) {
        // Game over logic and record score
        return;
      // }
      // else if (object instanceof Wall) {
        // Fall logic
      // }
    }
  }
};

Game.prototype.draw = function draw(ctx) {
  ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
  this.allObjects().forEach(function(object) {
    object.draw(ctx);
  });
};

Game.prototype.step = function step(delta) {
  this.moveObjects(delta);
  this.checkCollisions();
};

Game.prototype.moveObjects = function moveObjects(delta) {
  this.allObjects().forEach(function(object) {
    object.move(delta);
  });
};

module.exports = Game;