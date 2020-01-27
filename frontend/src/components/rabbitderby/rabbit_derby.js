import React from "react";
import GameView from "../game/game_view";

class RabbitDerby extends React.Component {
  componentDidMount() {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");
    new GameView(ctx).start();
  };


  render() {
    return (
      <div className="game">

      <canvas ref="canvas" width={ 640 } height={ 360 }>
      </canvas>
      </div>
    );
  }
};

export default RabbitDerby;