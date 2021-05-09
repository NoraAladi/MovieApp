export const API_KEY = '2890eb983775c94b9c99a02351df6e48';
export const API_BaseURL = `https://api.themoviedb.org/3`;

const getMovies = type => {
  return `${API_BaseURL}/movie/${type}?api_key=${API_KEY}`;
};

const getCredits = movieId => {
  return `${API_BaseURL}/movie/${movieId}/credits?api_key=${API_KEY}`;
};

const getGenres = `${API_BaseURL}/genre/movie/list?api_key=${API_KEY}`;

export const ServiceURL = {
  getMovies,
  getGenres,
  getCredits
};
