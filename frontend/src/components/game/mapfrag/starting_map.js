const STARTING_MAP = {
  background: {
    width: 640,
    height: 360,
    color: "https://i.imgur.com/Amszaei.png",
    // color: "../assets/Backgrounds/blue_grass.png",
    pos: [0, 0],
    vel: [-1, 0],
    type: "background"
  },
  obstacles: [
    {
      width: 25,
      height: 50,
      color: "https://i.imgur.com/WgJtDjI.png",
      // color: "../assets/Tiles/hill_small.png",
      pos: [320, 200],
      vel: [-1, 0],
      type: "image"
    },
    {
      width: 25,
      height: 50,
      color: "https://i.imgur.com/WgJtDjI.png",
      // color: "../assets/Tiles/hill_small.png",
      pos: [400, 195],
      vel: [-1, 0],
      type: "image"
    }
  ],
  marker: {
    width: 10,
    height: 10,
    color: '#000000',
    pos: [640, 10],
    vel: [-1, 0],
    type: 'marker'
  }
};

export default STARTING_MAP;