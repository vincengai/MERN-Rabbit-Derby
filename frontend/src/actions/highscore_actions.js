import * as HighscoreAPIUtil from '../util/highscore_api_util';


export const RECEIVE_ALL_HIGHSCORES = 'RECEIVE_ALL_HIGHSCORES';
export const RECEIVE_USER_HIGHSCORES = 'RECEIVE_USER_HIGHSCORES';
export const RECEIVE_A_HIGHSCORE = 'RECEIVE_A_HIGHSCORE';

const receiveAllHighscores = highscores => ({
    type: RECEIVE_ALL_HIGHSCORES,
    highscores,
});