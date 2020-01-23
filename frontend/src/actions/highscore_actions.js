import * as HighscoreAPIUtil from '../util/highscore_api_util';


export const RECEIVE_ALL_HIGHSCORES = 'RECEIVE_ALL_HIGHSCORES';
export const RECEIVE_USER_HIGHSCORES = 'RECEIVE_USER_HIGHSCORES';
export const RECEIVE_A_HIGHSCORE = 'RECEIVE_A_HIGHSCORE';

const receiveAllHighscores = highscores => ({
    type: RECEIVE_ALL_HIGHSCORES,
    highscores,
});

const receiveUserHighscores = highscores => ({
    type: RECEIVE_USER_HIGHSCORES,
    highscores
});

const receiveAHighscore = highscore => ({
    type: RECEIVE_A_HIGHSCORE,
    highscore
});

export const fetchAllHighscores = () => dispatch => (
    HighscoreAPIUtil.retrieveAllHighscores()
        .then(highscores => dispatch(receiveAllHighscores(highscores)))
        .catch(err => console.log(err))
);

export const fetchUserHighscores = userId => dispatch => (
    HighscoreAPIUtil.retrieveUserHighscores(userId)
        .then(highscores => dispatch(receiveUserHighscores(highscores)))
        .catch(err => console.log(err))
);

export const recordNewHighscore = data => dispatch => (
    HighscoreAPIUtil.postNewHighscore(data)
        .then(highscore => dispatch(receiveAHighscore(highscore)))
        .catch(err => console.log(err))
);