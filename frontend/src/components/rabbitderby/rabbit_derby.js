import React from "react";
import Game from "../game/game";
import GameView from "../game/game_view";

class RabbitDerby extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const game = new Game();
    const rabbit = game.rabbit;

    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#202020";

    // rabbit styling
    ctx.fillRect(0, 0, 320, 180); // x, y, width, height
    ctx.fillStyle = "#ff0000"; // hex for red
    ctx.beginPath();
    ctx.rect(rabbit.x, rabbit.y, rabbit.width, rabbit.height);
    ctx.fill();
  }

  render() {
    return (
      <canvas ref="canvas" width={ Game.DIM_X } height={ Game.DIM_Y }>
      </canvas>
    );
  }
};

export default RabbitDerby;