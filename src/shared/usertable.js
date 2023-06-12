import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function UserTable({ users }) {
  function deleteUser(userId) {
    console.log(userId);
    axios.delete(`https://tenambatch-default-rtdb.asia-southeast1.firebasedatabase.app/users.json/${userId}`)


  }
  return (
    <div className="card">
      <div className="card-body">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Date of Birth</th>
              <th scope="col">Gender</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr>
                <th scope="row">{i + 1}</th>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.dob}</td>
                <td>{user.gender}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>
                  <Link to={`/edit/${user.id}`} className="btn btn-primary">
                    Update
                  </Link>
                </td>
                <td>
                  <button className="btn btn-secondary" onClick={deleteUser}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserTable;
