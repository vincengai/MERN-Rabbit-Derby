import Game from "./game";

class GameView {
  constructor(ctx) {
    this.game = new Game();
    this.ctx = ctx;
  }

  start() {
    this.game.draw(this.ctx);
    requestAnimationFrame(this.animate.bind(this));
  }

  animate() {
    this.game.step();
    this.game.draw(this.ctx);
    requestAnimationFrame(this.animate.bind(this));
  }

  stop() {

  }
}

export default GameView;