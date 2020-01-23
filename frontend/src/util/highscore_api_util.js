import axios from 'axios';

export const retrieveAllHighscores = () => {
    return axios.get('/api/highscores/');
};

export const retrieveUserHighscores = userId => {
    return axios.get(`/api/highscores/user/${userId}`);
};

export const postNewHighscore = data => {
    return axios.post('/api/highscores/', data)
};