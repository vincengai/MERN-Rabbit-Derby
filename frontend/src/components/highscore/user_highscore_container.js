import React from "react";
import { connect } from "react-redux";

import { fetchUserHighscores } from "../../actions/highscore_actions";

import Highscore from "./highscore";

const mSTP = state => ({
  user: state.session.user,
  highscores: state.highscores.user,
  typeString: "Your Highscores",
  type: "user"
});

const mDTP = dispatch => ({
  fetchUserHighscores: userID => dispatch(fetchUserHighscores(userID)),
});

export default connect(mSTP, mDTP)(Highscore);
