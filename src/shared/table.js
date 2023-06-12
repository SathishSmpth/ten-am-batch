import React from "react";

class Table extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">S.No</th>
                <th scope="col">Name</th>
                <th scope="col">User Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
              </tr>
            </thead>
            <tbody>
              {this.props.users && this.props.users.map((user, i) => (
                <tr>
                  <th scope="row">{i + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.phone}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Table;
