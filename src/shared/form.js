import React from "react";

import useInput from "../hooks/useInput";

function Form({ title, user, setUser, submit, genderOptions }) {
  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: firstNameReset,
    hasError: firstNameHasError,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredLastName,
    isValid: enteredlastNameIsValid,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: lastNameReset,
    hasError: lastNameHasError,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredemail,
    isValid: enteredemailIsValid,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
    hasError: emailHasError,
  } = useInput((value) => value.includes("@") === true);

  function getValue(event) {
    // console.log(event.target.name,event.target.value);
    setUser({ ...user, [event.target.name]: event.target.value });
  }
  return (
    <div className="card mt-2">
      <div className="card-body">
        <form className="row g-1 g-lg-2" onSubmit={submit}>
          <div className="col-12">
            <div className="border-bottom border-3 text-center fs-3 fw-bold pb-2">
              {title}
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-floating">
              <input
                type="text"
                className={
                  firstNameHasError
                    ? "form-control border border-danger border-1"
                    : "form-control"
                }
                placeholder="First Name"
                name="firstName"
                onChange={firstNameChangeHandler}
                onBlur={firstNameBlurHandler}
                value={enteredFirstName}
              />
              <label htmlFor="firstName">First Name</label>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-floating">
              <input
                type="text"
                className={
                  lastNameHasError
                    ? "form-control border border-danger border-1"
                    : "form-control"
                }
                placeholder="Last Name"
                name="lastName"
                onChange={lastNameChangeHandler}
                onBlur={lastNameBlurHandler}
                value={enteredLastName}
              />
              <label htmlFor="lastName">Last Name</label>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-floating">
              <input
                type="date"
                className="form-control"
                placeholder="Date of Birth"
                name="dob"
                onChange={getValue}
                value={user.dob}
              />
              <label htmlFor="dob">Date of Birth</label>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-floating">
              <div className="form-control">
                {genderOptions.map((opt) => (
                  <div className="form-check-inline">
                    <input
                      type="radio"
                      className="form-check-input"
                      placeholder="Gender"
                      name="gender"
                      onChange={getValue}
                      value={opt}
                    />
                    <label htmlFor="gender">{opt}</label>
                  </div>
                ))}
              </div>
              <label htmlFor="gender">Gender</label>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-floating">
              <input
                type="number"
                className="form-control"
                placeholder="Phone"
                name="phone"
                onChange={getValue}
                value={user.phone}
              />
              <label htmlFor="phone">Phone</label>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-floating">
              <input
                type="email"
                className={
                  emailHasError
                    ? "form-control border border-danger border-1"
                    : "form-control"
                }
                placeholder="Email"
                name="email"
                onChange={emailChangeHandler}
                onBlur={emailBlurHandler}
                value={enteredemail}
              />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="password"
                onChange={getValue}
                value={user.password}
              />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                placeholder="Confirm Password"
                name="confirmPassword"
                onChange={getValue}
                value={user.confirmPassword}
              />
              <label htmlFor="confirmPassword">Confirm Password</label>
            </div>
          </div>
          <div className="col-12">
            <div className="d-grid col-4 mx-auto">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
