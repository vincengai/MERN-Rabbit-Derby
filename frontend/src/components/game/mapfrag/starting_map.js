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
  obstacles: [],
  marker: {
    width: 10,
    height: 10,
    color: "rgba(0, 0, 0, 0.0)",
    pos: [640, 10],
    vel: [-1, 0],
    type: 'marker'
  },
  floor: {
    width: 640,
    height: 110,
    color: `#C4EDF0`,
    pos: [0, 250],
    vel: [-1, 0],
    type: "floor"
  }
};

export default STARTING_MAP;