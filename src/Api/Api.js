import axios from 'axios';

const API_KEY = '0cc60419c7437694b148ea7ca5f1f33c';

const URL = 'https://api.themoviedb.org/3';

export const getTrending = async () => {
  const response = await axios.get(
    ` ${URL}/trending/movie/day?api_key=${API_KEY}`
  );

  return response.data;
};

export const getMovieByName = name => {
  return axios.get(`${URL}/search/movie?api_key=${API_KEY}&query=${name}`);
};

export const getMovieDetails = movieId => {
  return axios.get(`${URL}/movie/${movieId}?api_key=${API_KEY}`);
};

export const getMovieCast = movieId => {
  return axios.get(`${URL}/movie/${movieId}/credits?api_key=${API_KEY}`);
};

export const GetMovieReviews = movieId => {
  return axios.get(`${URL}/movie/${movieId}/reviews?api_key=${API_KEY}`);
};
