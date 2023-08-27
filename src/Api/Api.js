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

export const getMovieById = id => {
  return axios.get(`${URL}/movie/${id}?api_key=${API_KEY}`);
};

export const getMovieCast = id => {
  return axios.get(`${URL}/movie/${id}/credits?api_key=${API_KEY}`);
};

export const GetMovieReviews = id => {
  return axios.get(`${URL}/movie/${id}/reviews?api_key=${API_KEY}`);
};
