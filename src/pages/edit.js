import React, { useEffect, useState } from "react";
import Form from "../shared/form";
import axios from "axios";
import { useParams } from "react-router-dom";

function Edit() {
  const { userId } = useParams();
//   useEffect(() => {
//     axios
//       .get(
//         `https://tenambatch-default-rtdb.asia-southeast1.firebasedatabase.app/users.json/${userId}`
//       )
//       .then((res) => console.log(res));
//   });
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
    update();
    // get();
    setUser(initialState);
  }

  function update() {
    axios.put(`https://tenambatch-default-rtdb.asia-southeast1.firebasedatabase.app/users.json/${userId}`)
  }
  return (
    <Form
      handleSubmit={handleSubmit}
      setUser={setUser}
      user={user}
      title="Update Your Details"
      genderOptions={genderOptions}
    />
  );
}

export default Edit;
