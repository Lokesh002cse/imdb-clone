// src/api.js
import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000';

export const getMovies = async () => {
    const response = await axios.get(`${API_URL}/movies`);
    return response.data;
};

export const getMovieById = async (id) => {
    const response = await axios.get(`${API_URL}/movies/${id}`);
    return response.data;
};
