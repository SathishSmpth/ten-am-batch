import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  const { original_title, overview, poster_path,id } = movie;
  const image = `https://image.tmdb.org/t/p/w500${poster_path}`;
  return (
    <div className="col">
      <div class="card">
        <img src={image} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{original_title}</h5>
          <p class="card-text">{overview}</p>
          <Link to={`/movies/${original_title}/${id}`} class="btn btn-primary">
            Go somewhere
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
