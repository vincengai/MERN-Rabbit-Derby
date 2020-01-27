import TerrainObject from "./terrain_obj";

class MapFrag {
  constructor(mapObj) {
    this.obstacles = [];
    this.floor = new TerrainObject(mapObj.floor);
    this.marker = new TerrainObject(mapObj.marker);
    this.background = new TerrainObject(mapObj.background);
    this.addObstacles(mapObj.obstacles);
  };

  addObstacles(array) {
    for (let i = 0; i < array.length; i++) {
      let obstacle = new TerrainObject(array[i]);
      this.obstacles.push(obstacle);
    }
  }

  draw(ctx) {
    this.background.draw(ctx);
    this.floor.draw(ctx);
    // this.marker.draw(ctx);

    for (let idx = 0; idx < this.obstacles.length; idx++) {
      const ele = this.obstacles[idx];
      ele.draw(ctx);
    }
  }

  move() {
    this.background.move();
    this.marker.move();
    this.floor.move();

    for (let idx = 0; idx < this.obstacles.length; idx++) {
      const ele = this.obstacles[idx];
      ele.move();
    }
  }

  checkMarkerPosition() {
    let [x, y] = this.marker.pos;
    return x < 0 ? true : false;
  }
}

export default MapFrag;