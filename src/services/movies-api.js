import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';

const API_key = '9ee79cf45de55a8196583cb13968fce7';

const fetchMovies = () => {
  return axios.get(`${BASE_URL}/trending/movie/day?api_key=${API_key}`);
};

const getMovieDetails = id => {
  return axios.get(`${BASE_URL}/movie/${id}?api_key=${API_key}&language=en-US`);
};

const getMovieCredits = id => {
  return axios.get(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_key}&language=en-US`,
  );
};

const getMovieReviews = id => {
  return axios.get(
    `${BASE_URL}/movie/${id}/reviews?api_key=${API_key}&language=en-US`,
  );
};

const getSearchMovies = query => {
  return axios.get(
    `${BASE_URL}/search/movie?api_key=${API_key}&language=en-US&query=${query}&page=1&include_adult=false`,
  );
};

export {
  fetchMovies,
  getMovieDetails,
  getMovieCredits,
  getMovieReviews,
  getSearchMovies,
};