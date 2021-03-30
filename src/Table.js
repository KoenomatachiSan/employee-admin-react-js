import React from "react";

const UserTable = (props) => (
  <div>
    {props.employee.length < 1 && (
      <center>
        <lottie-player
          src="https://assets10.lottiefiles.com/private_files/lf30_mvdqkcvo.json"
          background="transparent"
          speed={1}
          style={{ width: "300px", height: "300px" }}
          loop
          autoPlay
        />
      </center>
    )}
    {props.employee.length > 1 && (
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Status</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.employee.length > 0 ? (
            props.employee.map((user) => (
              <tr key={user.id}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>{user.status}</td>
                <td>{user.salary}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => props.deleteUser(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>
                <span className="badge badge-danger"> Empty table</span>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    )}
  </div>
);

export default UserTable;
