import Game from "./game";

class GameView {
  constructor(ctx, mapIDs = []) {
    this.controller = {
      right: true,
      up: false,
      shift: false,
      left: true,

      keyListener: function (event) {
        var key_state = event.type == "keydown" ? true : false;

        switch (event.keyCode) {
          case 32: // up key
            this.controller.up = key_state;
            break;
          case 39: // right key
            this.controller.right = key_state;
            break;
          case 16: // shift key
            this.controller.shift = key_state;
        }
      }
    };
    this.game = new Game(mapIDs, this.controller);
    this.ctx = ctx;
    window.addEventListener("keydown", this.controller.keyListener.bind(this));
    window.addEventListener("keyup", this.controller.keyListener.bind(this));
  }

  start() {
    this.game.draw(this.ctx);
    this.animation = requestAnimationFrame(this.animate.bind(this));
  }

  animate() {
    this.game.step();
    this.game.draw(this.ctx);
    // if (this.game.checkCollisions()) {
      // this.stop();
    // } else {
      requestAnimationFrame(this.animate.bind(this));
    // }
  }

  stop() {
    // cancelAnimationFrame(this.animation);
  }
}

export default GameView;