import Rabbit from "./rabbit";
import MapFrag from "./mapfrag";
import map1 from "./mapfrag/map1";
import map2 from "./mapfrag/map2";
import starting_map from "./mapfrag/starting_map";

class Game {
  constructor() {
    this.dimX = 640;
    this.dimY = 360;
    this.rabbit = new Rabbit({
      width: 20,
      height: 20,
      pos: [0, 220],
      vel: [0, 0]
    });
    this.loadedMaps = [
      (new MapFrag(starting_map)),
      (new MapFrag(map1))
    ];
    this.nextMaps = [
      new MapFrag(map2),
      new MapFrag(map1),
      new MapFrag(map2)
    ];
  }

  draw(ctx) {
    ctx.clearRect(0, 0, this.dimX, this.dimY);

    for (let i = 0; i < this.loadedMaps.length; i++) {
      let ele = this.loadedMaps[i];
      ele.draw(ctx);
    }
    this.rabbit.draw(ctx);
  }

  move() {
    for (let i = 0; i < this.loadedMaps.length; i++) {
      let ele = this.loadedMaps[i];
      ele.move();
    }
    this.rabbit.move();
  }

  checkCollisions() {
    let firstMap = this.loadedMaps[0];

    for (let i = 0; i < firstMap.obstacles.length; i++) {
      let obstacle = firstMap.obstacles[i];

      if (obstacle.isCollidedWith(this.rabbit)) {
        console.log('rabbit hit');
        return true;
      }
    }
    return false;
  }

  checkFirstMap() {
    let firstMap = this.loadedMaps[0];

    if (firstMap.checkMarkerPosition()) {
      this.loadedMaps.shift();
      this.loadedMaps.push(this.nextMaps.shift());
    }
  }

  step() {
    this.move();
    this.checkCollisions();
    this.checkFirstMap();
  }
}

export default Game;