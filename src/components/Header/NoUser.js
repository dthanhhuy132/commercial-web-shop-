import React from "react";

import { Link } from "react-router-dom";

import { BsCart } from "react-icons/bs";

function NoUser({ cartLocal, isShowCart, setIsShowCart }) {
  return (
    <div
      className="collapse navbar-collapse navbar-dth"
      id="navbarSupportedContent"
    >
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link
            className="nav-link"
            to="/login"
            onClick={(e) => console.log("bam vao day")}
          >
            Login
          </Link>
        </li>

        <li className="nav-item">
          <a
            className="nav-link"
            href=""
            onClick={(e) => {
              e.preventDefault();
              setIsShowCart(!isShowCart);
            }}
          >
            <BsCart size={20} className="cart-icon" />
            <div className="cart-number">{cartLocal?.length || 0}</div>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NoUser;
