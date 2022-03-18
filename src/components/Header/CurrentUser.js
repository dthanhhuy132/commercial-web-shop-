import React from "react";

import { Link } from "react-router-dom";

import { BsCart } from "react-icons/bs";
import defaultAvatar from "../common/avatarDefault";

function CurrentUser({
  currentUser,
  handleLogOut,
  cartLocal,
  isShowCart,
  setIsShowCart,
  userCart,
}) {
  return (
    <div
      className="collapse navbar-collapse navbar-dth"
      id="navbarSupportedContent"
    >
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/user">
            <div className="user-info">
              <div className="user-info__img-wrapper">
                <img
                  src={currentUser?.image || defaultAvatar}
                  className="user-info__img"
                />
              </div>
              <p>{currentUser.name}</p>
            </div>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">
            My-Orders
          </Link>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="" onClick={(e) => handleLogOut(e)}>
            LogOut
          </a>
        </li>

        <li className="nav-item cart-icon">
          <a
            className="nav-link cart-icon"
            href=""
            onClick={(e) => {
              e.preventDefault();
              setIsShowCart(!isShowCart);
            }}
          >
            <BsCart size={20} className="cart-icon" />
            <div className="cart-number">
              {userCart.reduce((acc, cur) => acc + cur.quantity, 0)}
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default CurrentUser;
