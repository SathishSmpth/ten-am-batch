import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div class="modal fade show " style={{ display: "block" }}>
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5">404 Page Not Found</h1>
          </div>
          <div class="modal-body">
            Unfortunately the page you are looking for has been moved or delete
          </div>
          <div class="d-grid mx-auto col-4 mb-3">
            <Link type="button" to="home" class="btn btn-primary">
              Go to Home Page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
