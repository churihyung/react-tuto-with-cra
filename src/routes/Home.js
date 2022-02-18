import { useEffect, useState } from "react";
import Movies from "../components/Movies";
import MovieDetail from "./MovieDetail";

function Home() {
  //page loading
  const [loading, setLoading] = useState(false);
  //api 가져오기
  const [movies, setMovies] = useState([]);

  //async await 방식으로 가져오기
  const getMovies = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(true);
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      <h2>{loading ? "Movie List" : "Loading..."}</h2>
      {movies.map((movie, index) => (
        <Movies
          key={movie.id}
          id={movie.id}
          medium_cover_image={movie.medium_cover_image}
          title={movie.title}
          summary={movie.summary}
          genres={movie.genres}
        />
      ))}
    </div>
  );
}

export default Home;
