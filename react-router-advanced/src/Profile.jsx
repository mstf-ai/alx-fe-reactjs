import React from "react";
import { Outlet, Link } from "react-router-dom";

function Profile() {
  return (
    <div>
      <h1>Profile Page</h1>
      <nav>
        <Link to="details" style={{ marginRight: "10px" }}>Details</Link>
        <Link to="settings">Settings</Link>
      </nav>
      <hr />
      {/* Nested routes سيظهر محتواها هنا */}
      <Outlet />
    </div>
  );
}

export default Profile;
