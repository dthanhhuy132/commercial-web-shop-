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
import Cart from "./Cart";

function Header() {
  const currentUser = useSelector((state) => state.User.currentUser);
  const isAdmin = currentUser?.token === process.env.REACT_APP_TOKEN_ADMIN_KEY;
  const cartLocal = useSelector((state) => state.Cart.cartLocal);
  const userCart = useSelector((state) => state.Cart.userCart);

  console.log("userCart", userCart);
  const dispatch = useDispatch();
  const [isShowCart, setIsShowCart] = useState(false);

  function handleClickLogOut(e) {
    e.preventDefault();
    dispatch(logOut);
    window.location.reload();
  }

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (!e.target.classList.value.includes("cart")) setIsShowCart(false);
    });

    return () => {
      window.removeEventListener("click", (e) => {
        if (!e.target.classList.value.includes("cart")) setIsShowCart(false);
      });
    };
  }, [isShowCart]);

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
                userCart={userCart}
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
        <h2 className="cart-title">My Cart</h2>
        {userCart.map((item, i) => {
          if (!item) return;
          return <Cart item={item} key={i} />;
        })}

        <div className="total-cart-price">{`${numeral(
          userCart?.reduce((acc, cur) => acc + cur.price, 0)
        ).format(0.0)} ₫`}</div>
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
