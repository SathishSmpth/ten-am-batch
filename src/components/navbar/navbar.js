import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../pages/rootLayout";

function Navbar() {
  const { setSearchMovies } = useContext(AppContext);

  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <Link class="navbar-brand">React</Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="home">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="shows">
                TV
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="movies">
                Movies
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="sports">
                Sports
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="lifecycle">
                Life cycle Methods
              </Link>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => setSearchMovies(e.target.value)}
            />
          </form>
          <div>
            <Link to="signup" className="btn btn-light">
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
