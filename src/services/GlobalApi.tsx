// https://api.themoviedb.org/3/discover/movie/550?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf

import axios from "axios";

const movieBaseURL = "https://api.themoviedb.org/3/discover/movie?";
const api_key = "2ec0d66f5bdf1dd12eefa0723f1479cf";

const getPopularMovies = axios.get(movieBaseURL + "/movie?api_key=" + api_key);

export default { getPopularMovies };
