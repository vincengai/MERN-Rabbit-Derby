import React from 'react';
import { connect } from 'react-redux';

import { fetchAllHighscores } from '../../actions/highscore_actions';

import Highscore from './highscore';

const mSTP = state => ({
    user: state.session.user,
    highscores: state.highscores.all,
    typeString: "Top 5 Highscores",
    type: "all",
});

const mDTP = dispatch => ({
    fetchAllHighscores: () => dispatch(fetchAllHighscores()),
});

export default connect(mSTP, mDTP)(Highscore);