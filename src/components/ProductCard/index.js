import "./product-card.scss";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import numeral from "numeral";
import { Link } from "react-router-dom";

import {} from "../../";
import {
  addToCartLocal,
  updateUserCartAsync,
  updateUserCartAsyncByRemove,
} from "../../store/carts/action";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const cartLocal = useSelector((state) => state.Cart.cartLocal);
  const currentUser = useSelector((state) => state.User.currentUser);
  const userCart = useSelector((state) => state.Cart.userCart);

  function handleClickAddToCard(product) {
    !currentUser
      ? dispatch(addToCartLocal(product))
      : addProductToUserCard(currentUser, product);
  }

  function addProductToUserCard(currentUser, product) {
    let newUserCart = {};

    if (userCart.some((x) => x.id === product.id)) {
      userCart.forEach((x) => {
        if (x.id === product.id) {
          const oldProdcut = { ...x };
          newUserCart = {
            ...x,
            quantity: (x.quantity += 1),
          };
          dispatch(updateUserCartAsyncByRemove(currentUser.id, oldProdcut));
        }
      });
    } else {
      newUserCart = {
        ...product,
        quantity: 1,
      };
    }

    dispatch(updateUserCartAsync(currentUser.id, newUserCart));
  }

  const productCart = currentUser ? currentUser.productCart : cartLocal;

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 product-card">
      <div className="m-2 p-1 product">
        <Link
          to={`${product.category}/${product.name}`}
          state={{ id: product.id }}
        >
          <div className="product__img-container m-2">
            <img className="product__img" src={product.image} />
          </div>
          <h5 className="product__title m-2 mb-4">{product.name}</h5>
        </Link>
        <h5 className=" m-2">{`${numeral(product.price).format(0.0)} ₫`}</h5>

        <div className="product__action m-2 d-flex justify-content-between">
          <button type="button" className="btn btn-danger btn-sm rounded-3">
            BUY NOW
          </button>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => handleClickAddToCard(product)}
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
