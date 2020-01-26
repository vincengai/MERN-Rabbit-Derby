import React from "react";
import Game from "../game/game";
import GameView from "../game/game_view";

class RabbitDerby extends React.Component {
  componentDidMount() {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");
    new GameView(ctx).start();

    // const scale = 1;
    // const width = 64;
    // const height = 64;
    // const scaledWidth = scale * width;
    // const scaledHeight = scale * height;

    // const cycleLoop = [0, 1, 0, 2];
    // let currentLoopIndex = 0;
    // let frameCount = 0;

    // function drawFrame(frameX, frameY, canvasX, canvasY) {
    //   ctx.drawImage(rabbit.image, frameX * width, frameY * height, width, height, canvasX, canvasY, scaledWidth, scaledHeight);
    // }

    // function init() {
    //   drawFrame(0, 0, 0, 0);
    //   drawFrame(1, 0, scaledWidth, 0);
    //   drawFrame(0, 0, scaledWidth * 2, 0);
    //   drawFrame(2, 0, scaledWidth * 3, 0);
    //   window.requestAnimationFrame(loop);
    // }

    // const loop = function() {
    //   frameCount++;
    //   if (frameCount < 3) {
    //     window.requestAnimationFrame(loop);
    //     return;
    //   }
    //   frameCount = 0;

    // JUMP FUNCTION
    // if (this.controller.up && this.game.rabbit.jumping == false) {
    //   this.game.rabbit.yVelocity -= 30; // -20 To send the object Up
    //   this.game.rabbit.jumping = true; // So the object cant jump again
    // }

    //   // MOVING RIGHT FUNCTION
    //   if (controller.right || !controller.right) {
    //     rabbit.xVelocity += 1.5; // += is for smoother graphics than a set constant, MIGHT HAVE A CONSTANT X VELOCITY TO PREVENT INCREASE OF SPEED
    //   }

    //   // Y-axis decay, Updating X & Y Current Position in terms of
    //   rabbit.yVelocity += 2.5; // gravity, adds 1.5 per every frame of animation, w/o this the Object will never fall
    //   rabbit.pos[0] += rabbit.xVelocity; // Adds x velocity to current POS
    //   rabbit.pos[1] += rabbit.yVelocity; // Adds y velocity to current POS
    //   rabbit.yVelocity *= 0.9; // friction,  gives effect of slowing down, allows friction on Y axis
    //   // rabbit.xVelocity *= 0.9; // friction, gradually reduces velocity, slowly reduces to 0, giving the effect of slowing down
    //   //  CHANGE CONSTANT ON xVelocity TO HAVE A RETURN A SPEED CLOSE TO BASE SPEED

    //   if (controller.shift) {
    //     rabbit.xVelocity = 2;
    //     rabbit.shift = true;
    //   }

    //   if (rabbit.xVelocity > 1) {
    //     rabbit.xVelocity *= 0.8;
    //   }

    //   // Collision detection, in regards to falling onto the "floor" and landing
    //   if (rabbit.pos[1] > 340 - 16 - 32) {
    //     // 180 being the very bottom of your screen
    //     rabbit.jumping = false; // -60 being the location of the rendered floor, this number is subject to change in terms of Object floor
    //     rabbit.pos[1] = 340 - 16 - 32; // -32 being the top coordinate of the Object, this number is subject to change in terms of the Object
    //     rabbit.yVelocity = 0;
    //   } // Set Jumping to False, to allow jump again, Y coordinate to equal position to update current POS, yVelocity to 0 because youre hitting floor

      // background styling
      // ctx.fillStyle = "#202020";
      // ctx.fillRect(0, 0, 640, 360); // x, y, width, height
    
      // ctx.fillStyle = "#202020";
      // ctx.clearRect(0, 0, canvas.width, canvas.height);
      // ctx.fillRect(0, 0, canvas.width, canvas.height);
      // drawFrame(cycleLoop[currentLoopIndex], 0, rabbit.pos[0], rabbit.pos[1]);
      // currentLoopIndex++;
      // if (currentLoopIndex >= cycleLoop.length) {
      //   currentLoopIndex = 0;
      // }
      // window.requestAnimationFrame(loop);

      // call update when the browser is ready to draw again
      // window.requestAnimationFrame(loop);
      
    };

    // window.requestAnimationFrame(loop);
  // }

  render() {
    return (
      <canvas ref="canvas" width={ 640 } height={ 360 }>
      </canvas>
    );
  }
};

export default RabbitDerby;