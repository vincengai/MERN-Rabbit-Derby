import React from "react";
import Game from "../game/game";
import GameView from "../game/game_view";
// import "../assets/sprite/rabbit.png";


class RabbitDerby extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const game = new Game();
    const rabbit = game.rabbit;
    console.log(rabbit);


    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#202020";

    // PANDA PANDA PANDA
    let img = new Image();
    img.src = "https://i.imgur.com/vvbTIR8.png";
    img.onload = function() {
      init();
    };

    const scale = 1;
    const width = 64;
    const height = 64;
    const scaledWidth = scale * width;
    const scaledHeight = scale * height;

    const cycleLoop = [0, 1, 0, 2];
    let currentLoopIndex = 0;
    let frameCount = 0;

    function drawFrame(frameX, frameY, canvasX, canvasY) {
      ctx.drawImage(img, frameX * width, frameY * height, width, height, canvasX, canvasY, scaledWidth, scaledHeight);
    }

    function init() {
      drawFrame(0, 0, 0, 0);
      drawFrame(1, 0, scaledWidth, 0);
      drawFrame(0, 0, scaledWidth * 2, 0);
      drawFrame(2, 0, scaledWidth * 3, 0);
      window.requestAnimationFrame(loop);
    }

    function step() {
      frameCount++;
      if (frameCount < 15) {
        window.requestAnimationFrame(step);
        return;
      }
      frameCount = 0;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawFrame(cycleLoop[currentLoopIndex], 0, 0, 0);
      currentLoopIndex++;
      if (currentLoopIndex >= cycleLoop.length) {
        currentLoopIndex = 0;
      }
      window.requestAnimationFrame(step);
    }

    const controller = {
      right: true,
      up: false,
      shift: false,
      left: true,

      keyListener: function(event) {
        var key_state = event.type == "keydown" ? true : false;

        switch (event.keyCode) {
          case 32: // up key
            controller.up = key_state;
            break;
          case 39: // right key
            controller.right = key_state;
            break;
          case 16: // shift key
            controller.shift = key_state;
        }
      }
    };

    const loop = function() {
      frameCount++;
      if (frameCount < 3) {
        window.requestAnimationFrame(loop);
        return;
      }
      frameCount = 0;

      // JUMP FUNCTION
      if (controller.up && rabbit.jumping == false) {
        rabbit.yVelocity -= 30; // -20 To send the object Up
        rabbit.jumping = true; // So the object cant jump again
      }

      // MOVING RIGHT FUNCTION
      if (controller.right || !controller.right) {
        rabbit.xVelocity += 1.5; // += is for smoother graphics than a set constant, MIGHT HAVE A CONSTANT X VELOCITY TO PREVENT INCREASE OF SPEED
      }

      // Y-axis decay, Updating X & Y Current Position in terms of
      rabbit.yVelocity += 2.5; // gravity, adds 1.5 per every frame of animation, w/o this the Object will never fall
      rabbit.pos[0] += rabbit.xVelocity; // Adds x velocity to current POS
      rabbit.pos[1] += rabbit.yVelocity; // Adds y velocity to current POS
      rabbit.yVelocity *= 0.9; // friction,  gives effect of slowing down, allows friction on Y axis
      // rabbit.xVelocity *= 0.9; // friction, gradually reduces velocity, slowly reduces to 0, giving the effect of slowing down
      //  CHANGE CONSTANT ON xVelocity TO HAVE A RETURN A SPEED CLOSE TO BASE SPEED

      if (controller.shift) {
        rabbit.xVelocity = 2;
        rabbit.shift = true;
      }

      if (rabbit.xVelocity > 1) {
        rabbit.xVelocity *= 0.8;
      }

      // Collision detection, in regards to falling onto the "floor" and landing
      if (rabbit.pos[1] > 340 - 16 - 32) {
        // 180 being the very bottom of your screen
        rabbit.jumping = false; // -60 being the location of the rendered floor, this number is subject to change in terms of Object floor
        rabbit.pos[1] = 340 - 16 - 32; // -32 being the top coordinate of the Object, this number is subject to change in terms of the Object
        rabbit.yVelocity = 0;
      } // Set Jumping to False, to allow jump again, Y coordinate to equal position to update current POS, yVelocity to 0 because youre hitting floor

      // background styling
      ctx.fillStyle = "#202020";
      ctx.fillRect(0, 0, 640, 360); // x, y, width, height

      // rabbit styling
      // ctx.fillStyle = "#ff0000"; // hex for red
      // ctx.beginPath();
      // ctx.rect(rabbit.pos[0], rabbit.pos[1], 50, 50);
      // ctx.fill();
    
      // const panda1 = ctx.drawImage(img, 0, 0, width, height, rabbit.pos[0], rabbit.pos[1], width, height);
      // drawFrame(0, 0, rabbit.pos[0], rabbit.pos[1]);
      // drawFrame(0, 0, rabbit.pos[0], rabbit.pos[1]);
      // drawFrame(1, 0, rabbit.pos[0], rabbit.pos[1]);
      // drawFrame(0, 0, rabbit.pos[0], rabbit.pos[1]);
      // drawFrame(2, 0, rabbit.pos[0], rabbit.pos[1]);
      // frameCount++;
      // if (frameCount < 15) {
      //   window.requestAnimationFrame(loop);
      //   return;
      // }
      // frameCount = 0;
      // frameCount++;
      // if (frameCount < 15) {
      //   window.requestAnimationFrame(loop);
      //   return;
      // }
      // frameCount = 0;
      ctx.fillStyle = "#202020";
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      drawFrame(cycleLoop[currentLoopIndex], 0, rabbit.pos[0], rabbit.pos[1]);
      currentLoopIndex++;
      if (currentLoopIndex >= cycleLoop.length) {
        currentLoopIndex = 0;
      }
      window.requestAnimationFrame(loop);


      // "Ground" styling
      // ctx.strokeStyle = "#202830";
      // ctx.lineWidth = 4;
      // ctx.beginPath();
      // ctx.moveTo(0, 164);
      // ctx.lineTo(320, 164);
      // ctx.stroke();

      // call update when the browser is ready to draw again
      // window.requestAnimationFrame(loop);
    };

    window.addEventListener("keydown", controller.keyListener);
    window.addEventListener("keyup", controller.keyListener);
    // window.requestAnimationFrame(loop);


  }

  render() {
    return (
      <canvas ref="canvas" width={ Game.DIM_X } height={ Game.DIM_Y }>
      </canvas>
    );
  }
};

export default RabbitDerby;