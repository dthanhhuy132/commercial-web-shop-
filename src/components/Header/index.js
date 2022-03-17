import "./header.scss";

import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import numeral from "numeral";
import { logOut } from "../../store/users/action";
import CurrentUser from "./CurrentUser";
import Admin from "./Admin";
import NoUser from "./NoUser";

function Header() {
  const currentUser = useSelector((state) => state.User.currentUser);
  const isAdmin = currentUser?.token === process.env.REACT_APP_TOKEN_ADMIN_KEY;
  const cartLocal = useSelector((state) => state.Cart.cartLocal);
  const dispatch = useDispatch();
  const [isShowCart, setIsShowCart] = useState(false);

  useEffect(() => {
    return () => {};
  });

  function handleClickLogOut(e) {
    e.preventDefault();
    dispatch(logOut);
    window.location.reload();
  }

  function handleClickRemoveItem(productItem) {
    console.log("remove item ne", productItem);
  }

  const cartRef = useRef(null);

  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            FireCommerce
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FaBars color="white" size={20} />
          </button>
          {currentUser ? (
            !isAdmin ? (
              <CurrentUser
                currentUser={currentUser}
                handleLogOut={handleClickLogOut}
                cartLocal={cartLocal}
                isShowCart={isShowCart}
                setIsShowCart={setIsShowCart}
              />
            ) : (
              <Admin handleLogOut={handleClickLogOut} />
            )
          ) : (
            <NoUser
              isShowCart={isShowCart}
              setIsShowCart={setIsShowCart}
              cartLocal={cartLocal}
            />
          )}
        </div>
      </nav>

      <div ref={cartRef} className={`cart ${isShowCart ? "show" : ""}`}>
        <h2>My Cart</h2>
        {cartLocal.map((item, i) => {
          if (!item) return;
          return (
            <div className="cart-item" key={i}>
              <div className="cart__img">
                <img src={item?.image} />
              </div>
              <div className="cart__info">
                <div className="cart__info__name">
                  <div>{item?.name}</div>
                  <div onClick={() => handleClickRemoveItem(item)}>
                    <IoMdRemoveCircleOutline
                      className="name-remove-icon"
                      size={35}
                      title="Remove"
                    />
                  </div>
                </div>
                <div className="cart__info__price">{`${numeral(
                  item?.price
                ).format(0.0)} ₫`}</div>
                <div className="cart__info__quantity">{item?.quantity}</div>
                <div className="cart__info__total-price">{item?.name}</div>
              </div>
            </div>
          );
        })}

        <div className="total-cart-price">{`${numeral(2000000).format(
          0.0
        )} ₫`}</div>
      </div>
    </div>
  );
}

export default Header;

{
  /* <TextField
          id="outlined-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        /> */
}
