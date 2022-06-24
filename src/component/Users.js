import React from "react";
export default function Users(props) {
  const users = props.users;
  return (
    <div>
      <h1>Users</h1>
      {users && (
        <ul className="list-group">
          {users.map((user, index) => {
            return (
              <li className="list-group-item" key={index}>
                <button className="btn sm-btn btn-outline-info">{user.username}</button>
                <i
                  className="fa-solid fa-user float-end"
                  onClick={() => {
                    // hide/show
                    if (document.getElementById(user.id).classList.contains("d-none")) {
                      document.getElementById(user.id).classList.remove("d-none");
                      document.getElementById(user.id).classList.add("d-block");
                    } else {
                      document.getElementById(user.id).classList.remove("d-block");
                      document.getElementById(user.id).classList.add("d-none");
                    }
                  }}
                ></i>
                <div>
                  <div className="col-sm-12 d-none" id={user.id}>
                    <div className="card border-0">
                      <div className="card-body">
                        <h5 className="card-title">{user.name}</h5>
                        <p className="card-text">User Name: {user.username}</p>
                        <p className="card-text">Email Id: {user.email}</p>
                        <p className="card-text">
                          Address: {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
                        </p>
                        <p className="card-text">
                          Location: {user.address.geo.lat}, {user.address.geo.lng}
                        </p>

                        <p>Phone: {user.phone}</p>
                        <p>Find me at www.{user.website}</p>
                        <p>Company: {user.company.name}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
