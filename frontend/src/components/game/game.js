const Rabbit = require("./rabbit");
// const Trap = require("./trap");

function Game() {
  this.rabbits = [];
  this.traps = [];
}

Game.DIM_X = 1000;
Game.DIM_Y = 600;

Game.prototype.add = function add(object) {
  if (object instanceof Rabbit) {
    this.rabbits.push(object);
  } else if (object instanceof Trap) {
    this.traps.push(object);
  } else {
    throw new Error("Unknown object");
  }
}

Game.prototype.addRabbit = function addRabbit() {
  const rabbit = new Rabbit({
    pos: [0, 0],
    vel: [1, 1],
    radius: 5,
    game: this
  });

  this.add(rabbit);

  return rabbit;
};

Game.prototype.objsExceptRabbit = function objsExceptRabbit() {
  return [].concat(this.traps);
};

Game.prototype.allObjects = function allObjects() {
  return [].concat(this.rabbits, this.traps);
};

Game.prototype.checkCollisions = function checkCollisions() {
  const rabbit = this.rabbit;
  const objsExceptRabbit = this.objsExceptRabbit();
  for (let i = 0; i < objsExceptRabbit.length; i++) {
    const object = objsExceptRabbit[i];
    if (rabbit.isCollidedWith(object)) {
      // Game over logic and record score
      return;
    }
  }
};

Game.prototype.draw = function draw(ctx) {
  ctx.clearReact(0, 0, Game.DIM_X, Game.DIM_Y);
  this.allObjects().forEach(function(object) {
    object.draw(ctx);
  });
};

Game.prototype.moveObjects = function moveObjects(delta) {
  this.allObjects().forEach(function(object) {
    object.move(delta);
  });
};

Game.prototype.step = function step(delta) {
  this.moveObjects(delta);
  this.checkCollisions();
};

module.exports = Game;