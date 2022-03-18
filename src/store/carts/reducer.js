import { ADD_TO_CART_LOCAL, GET_ALL_CART, GET_USER_CART } from "./action";

const initState = {
  cartLocal: JSON.parse(localStorage.getItem(ADD_TO_CART_LOCAL)) || [],
  userCart: [],
  allCart: [],
};

export default function cartReducer(state = initState, action) {
  switch (action.type) {
    case ADD_TO_CART_LOCAL:
      const product = action.payload;
      let newProduct = null;
      if (state.cartLocal.some((item) => item?.id === product?.id)) {
        state.cartLocal.forEach((item) => {
          if (item?.id === product?.id) {
            item.quantity += 1;
          }
        });
      } else {
        newProduct = {
          ...product,
          quantity: 1,
        };
      }
      const updateCart = newProduct
        ? [...state.cartLocal, newProduct]
        : [...state.cartLocal];
      localStorage.setItem(ADD_TO_CART_LOCAL, JSON.stringify(updateCart));
      return {
        ...state,
        cartLocal: updateCart,
      };

    case GET_USER_CART:
      return {
        ...state,
        userCart: action.payload.productCart,
      };

    case GET_ALL_CART:
      return {
        ...state,
        allCart: action.payload,
      };

    default:
      return state;
  }
}
