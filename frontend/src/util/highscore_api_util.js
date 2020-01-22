import axios from 'axios';

export const retrieveAllHighscore = () => {
    return axios.get('/api/highscores/', highscoreData);
};

export const retrieveUserHighscore = userId => {
    return axios.get(`/api/highscores/user/${userId}`, highscoreData);
};

export const postNewHighscore = data => {
    return axios.post('/api/highscores/', data)
};