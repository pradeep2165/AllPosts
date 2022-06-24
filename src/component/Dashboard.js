import React from "react";
import Posts from "./Posts";
import Users from "./Users";

export default function Dashboard(props) {
  return (
    <div className="container row">
      <div className="col-12 col-md-3">
        <Users users={props.users} profileIdHandler={props.profileIdHandler} />
      </div>
      <div className="col-12 col-md-6">
        <Posts />
      </div>
    </div>
  );
}
