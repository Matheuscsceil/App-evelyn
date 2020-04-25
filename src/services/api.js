import axios from 'axios';

export const url_image = 'https://image.tmdb.org/t/p/w500';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export default api;
