import React from "react";
import { Link } from "react-router-dom";

function Admin({ handleLogOut }) {
  return (
    <div
      className="collapse navbar-collapse navbar-dth"
      id="navbarSupportedContent"
    >
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/admin">
            Admin
          </Link>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="" onClick={(e) => handleLogOut(e)}>
            LogOut
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Admin;
