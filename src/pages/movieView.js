import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MovieView() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNWM5OWFhMTZkMGYyYWYyOWI1YTY4OTUwZjIwYTQ0NCIsInN1YiI6IjY0Njc1Njk1MzNhMzc2MDEwMWZhMzI1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gqh0QhsN6SFPkmfjrUix05gWhjnpMJL6cTxw_Lf4o3Q",
      },
    };

    fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
      .then((response) => response.json())
      .then((response) => setMovieDetails(response))
      .catch((err) => console.error(err));
  }, [id]);
  const { original_title, overview, poster_path } = movieDetails;
  const image = `https://image.tmdb.org/t/p/w500${poster_path}`;
  return (
    <div>
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4">
            <img src={image} class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{original_title}</h5>
              <p class="card-text text-truncate">{overview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieView;
