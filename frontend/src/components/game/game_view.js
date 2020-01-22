function GameView(game, ctx) {
  this.ctx = ctx;
  this.game = game;
  this.rabbit = this.game.addRabbit();
}

GameView.prototype.bindKeyHandlers = function bindKeyHandlers() {
  const rabbit = this.rabbit;
  key("a", function() { rabbit.accelerate() });
  key("space", function() { rabbit.jump() });
};

GameView.prototype.start = function start() {
  this.bindKeyHandlers();
  this.lastTime = 0;
  requestAnimationFrame(this.animate.bind(this));
}

GameView.prototype.animate = function animate(time) {
  const timeDelta = time - this.lastTime;
  this.game.step(timeDelta);
  this.game.draw(this.ctx);
  this.lastTime = time;
  requestAnimationFrame(this.animate.bind(this));
}

module.exports = GameView;