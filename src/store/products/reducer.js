import {
  ADD_PRODUCT,
  GET_PRODUCT,
  DELETE_PRODUCT,
  GET_PRODUCT_BY_ID,
} from "./action";

const initState = {
  products: [],
  product: {},
};

export default function productsReducer(state = initState, action) {
  switch (action.type) {
    case GET_PRODUCT:
      return {
        ...state,
        products: action.payload,
      };

    case GET_PRODUCT_BY_ID:
      return {
        ...state,
        product: action.payload,
      };
    default:
      return state;
  }
}
