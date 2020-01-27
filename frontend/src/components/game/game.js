import Rabbit from "./rabbit";
import MapFrag from "./mapfrag";
import MAPS from "./mapfrag/maps";
// import map1 from "./mapfrag/map1";
// import map2 from "./mapfrag/map2";
import starting_map from "./mapfrag/starting_map";

class Game {
  constructor(mapIDs, controller) {
    this.dimX = 640;
    this.dimY = 360;
    this.rabbit = new Rabbit({
      width: 20,
      height: 20,
      pos: [100, 220],
      controller: controller
    });
    this.loadedMaps = [
      (new MapFrag(starting_map))
    ];
    this.nextMaps = [];
    this.playerMaps = mapIDs;
    this.startGameLoadingMaps();
  }

  startGameLoadingMaps() {
    if (this.playerMaps.length === 0) {
      this.loadedMaps.push(new MapFrag(MAPS["MAP1"]));
      this.generateNextMap();
      this.generateNextMap();
    } else {
      for (let i = 0; i < this.playerMaps.length; i++) {
        let mapID = this.playerMaps[i];
        this.nextMaps.push(new MapFrag(MAPS[`MAP${mapID}`]));
      }
      this.loadedMaps.push(this.nextMaps.shift());
    }
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
    let obstacles = firstMap.obstacles;

    for (let i = 0; i < obstacles.length; i++) {
      let obstacle = obstacles[i];

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
      if (this.playerMaps.length === 0) {
        this.generateNextMap();
      }
      this.loadedMaps.push(this.nextMaps.shift());
    }
  }

  generateNextMap() {
    let randMapID = Math.floor((Math.random() * 4) + 1);
    this.nextMaps.push(new MapFrag(MAPS[`MAP${randMapID}`]));
  }

  step() {
    this.move();
    this.checkCollisions();
    this.checkFirstMap();
  }
}

export default Game;