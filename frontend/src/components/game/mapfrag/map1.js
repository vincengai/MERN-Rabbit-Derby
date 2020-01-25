const MAP1 = {
  background: {
    width: 640,
    height: 360,
    color: "https://i.imgur.com/Amszaei.png",
    // color: "../assets/Backgrounds/colored_land.png",
    pos: [640, 0],
    vel: [-1, 0],
    type: "background"
  },
  obstacles: [
    {
      width: 25,
      height: 50,
      color: "https://i.imgur.com/WgJtDjI.png",
      // color: "../assets/Tiles/hill_small.png",
      pos: [960, 200],
      vel: [-1, 0],
      type: "image"
    },
    {
      width: 25,
      height: 50,
      color: "https://i.imgur.com/WgJtDjI.png",
      // color: "../assets/Tiles/hill_small.png",
      pos: [1040, 195],
      vel: [-1, 0],
      type: "image"
    }
  ],
  marker: {
    width: 10,
    height: 10,
    color: '#000000',
    pos: [1280, 10],
    vel: [-1, 0],
    type: 'marker'
  }
};

export default MAP1;