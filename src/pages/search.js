import React, { useEffect, useState, useContext } from "react";
import MovieCard from "../shared/movieCard";
import { AppContext } from "./rootLayout";

function SearchPage() {
  const { searchMovies } = useContext(AppContext);
  const [result, setResult] = useState([]);
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNWM5OWFhMTZkMGYyYWYyOWI1YTY4OTUwZjIwYTQ0NCIsInN1YiI6IjY0Njc1Njk1MzNhMzc2MDEwMWZhMzI1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gqh0QhsN6SFPkmfjrUix05gWhjnpMJL6cTxw_Lf4o3Q",
      },
    };

    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${searchMovies}&include_adult=false&language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => setResult(response.results))
      .catch((err) => console.error(err));
  }, [searchMovies]);
  return (
    <div className="mt-2">
      <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4">
        {result.map((movie, i) => (
          <MovieCard movie={movie} key={i} />
        ))}
      </div>
    </div>
  );
}

export default SearchPage;
