import {
    RECEIVE_ALL_HIGHSCORES,
    RECEIVE_USER_HIGHSCORES,
    RECEIVE_A_HIGHSCORE
} from '../actions/highscore_actions';

const HighscoresReducer = (state = { all: {}, user: {}, new: undefined }, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_ALL_HIGHSCORES:
            nextState.all = action.highscores.data;
            return nextState;

        case RECEIVE_USER_HIGHSCORES:
            nextState.user = action.highscores.data;
            return nextState;

        case RECEIVE_A_HIGHSCORE:
            nextState.new = action.highscore.data;
            return nextState;
            
        default:
            return state;
    }
}

export default HighscoresReducer;