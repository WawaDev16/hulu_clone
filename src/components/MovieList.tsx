import { useEffect, useState } from "react";
import GlobalApi from "../services/GlobalApi";
import MovieCard from "./MovieCard";

function MovieList(genreId: any) {
  const [movieList, setMovieList] = useState<any>([]);

  useEffect(() => {
    getMovieListByGenreId();
  }, []);

  const getMovieListByGenreId = () => {
    GlobalApi.getMovieByGenreId(genreId.genreId).then((resp: any) => {
      setMovieList(resp.data.results);
    });
  };
  return (
    <div>
      <div className="w-full overflow-scroll scroll-smooth overflow-x-auto whitespace-nowrap scrollbar-none mb-16">
        {movieList.map(
          (item: any, index: any) => index < 7 && <MovieCard movie={item} />
        )}
      </div>
    </div>
  );
}

export default MovieList;
