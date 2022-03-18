import {
  ADD_USER,
  GET_USER,
  GET_ALL_USER,
  LOG_OUT,
  USER,
  ADD_PRODUCT_TO_USER_CART,
} from "./action";

const initState = {
  currentUser: JSON.parse(localStorage.getItem(USER)),
  users: [],
};

export default function userReducer(state = initState, action) {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    case GET_ALL_USER:
      return {
        ...state,
        users: action.payload,
      };

    case LOG_OUT:
      return {
        ...state,
        currentUser: null,
      };

    default:
      return state;
  }
}
