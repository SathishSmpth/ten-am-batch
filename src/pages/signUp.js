import React, { Fragment, useState } from "react";
import Form from "../shared/form";
import UserTable from "../shared/usertable";
import axios from "axios";

function SignUp() {
  const initialState = {
    firstName: "",
    lastName: "",
    dob: "",
    gender: "male",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const genderOptions = ["male", "female"];

  const [user, setUser] = useState(initialState);
  const [users, setUsers] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(user);
    post();
    // get();
    setUser(initialState);
  }

  function post() {
    fetch(
      "https://tenambatch-default-rtdb.asia-southeast1.firebasedatabase.app/users.json",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(user),
      }
    )
      .then((response) => response.json())
      .then((data) => console.log(data))
      .then(get)
      .catch((err) => console.error(err));
  }
  function get() {
    fetch(
      "https://tenambatch-default-rtdb.asia-southeast1.firebasedatabase.app/users.json"
    )
      .then((res) => res.json())
      .then((users) => {
        const ur  = []
        for (const key in users) {
          ur.push({...users[key],id:key}) ;
        }
        setUsers(ur)
      })
      .catch((err) => console.error(err));
  }


  return (
    <Fragment>
      <Form
        title="Sign Up"
        user={user}
        setUser={setUser}
        submit={handleSubmit}
        genderOptions={genderOptions}
      />
      <UserTable users={users} />
    </Fragment>
  );
}

export default SignUp;
