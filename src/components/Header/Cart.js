import React from "react";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import numeral from "numeral";
import { useDispatch } from "react-redux";

function Cart({ item }) {
  const dispatch = useDispatch();
  
  function handleClickRemoveItem(productItem) {}
  return (
    <div className="cart-item">
      <div className="cart__img">
        <img src={item?.image} />
      </div>
      <div className="cart__info">
        <div className="cart__info__name">
          <div className="cart__info__name-name">{item?.name}</div>
          <div onClick={() => handleClickRemoveItem(item)}>
            <IoMdRemoveCircleOutline
              className="name-remove-icon cart-remove-icon"
              size={35}
              title="Remove"
            />
          </div>
        </div>
        <div className="cart__info__price">{`${numeral(item?.price).format(
          0.0
        )} ₫`}</div>
        <div className="cart__info__quantity">{item?.quantity}</div>
        <div className="cart__info__total-price">{item?.name}</div>
      </div>
    </div>
  );
}

export default Cart;
