import React from "react";
import { Form, useActionData, useNavigate } from "react-router-dom";

function Login() {
  const data = useActionData();
  const navigate = useNavigate();
  return (
    <div className="row mt-5">
      <div className="col-5 mx-auto">
        <div className="card">
          <div className="card-body">
            <Form className="row g-1 g-lg-2" method="post">
              <div className="col-12">
                <div className="border-bottom border-3 text-center fs-3 fw-bold pb-2">
                  Login
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    // onChange={firstNameChangeHandler}
                    // onBlur={firstNameBlurHandler}
                    // value={enteredFirstName}
                  />
                  <label htmlFor="email">Email</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    // onChange={lastNameChangeHandler}
                    // onBlur={lastNameBlurHandler}
                    // value={enteredLastName}
                  />
                  <label htmlFor="password">Password</label>
                </div>
              </div>
              <div className="col-12">
                <div className="d-grid col-8 mx-auto">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
