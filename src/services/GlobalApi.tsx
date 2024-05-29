// https://api.themoviedb.org/3/discover/movie?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf

import axios from "axios";

const movieBaseURL = "https://api.themoviedb.org/3";
const api_key = "896cbd9aff738d235d4631e016cb0edc";

const getPopularMovies = axios.get(
  movieBaseURL + "/discover/movie?api_key=" + api_key
);

export default { getPopularMovies };
