import React from "react";
const rabbit = require("../assets/sprite/rabbit.png");

function spriteAnimation() {

  let img = new Image()
  img = rabbit;
  img.src = "https://i.imgur.com/vvbTIR8.png";
  img.onload = function () {
    init();
  };

  window.requestAnimationFrame(step);

  const scale = 1;
  const width = 64;
  const height = 64;
  const scaledWidth = scale * width;
  const scaledHeight = scale * height;

  let canvas = document.querySelector('canvas');
  let ctx = canvas.getContext('2d');

  function drawFrame(frameX, frameY, canvasX, canvasY) {
    ctx.drawImage(img,
      frameX * width, frameY * height, width, height,
      canvasX, canvasY, scaledWidth, scaledHeight);
  }

  function init() {
    drawFrame(0, 0, 0, 0);
    drawFrame(1, 0, scaledWidth, 0);
    drawFrame(0, 0, scaledWidth * 2, 0);
    drawFrame(2, 0, scaledWidth * 3, 0);
    window.requestAnimationFrame(step);
  }

  const cycleLoop = [0, 1, 0, 2];
  let currentLoopIndex = 0;
  let frameCount = 0;


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
}

export default spriteAnimation;