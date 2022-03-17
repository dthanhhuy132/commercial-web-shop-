import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import cartReducer from "./carts/reducer";

import productsReducer from "./products/reducer";
import userReducer from "./users/reducer";

const rootReducer = combineReducers({
  Products: productsReducer,
  Cart: cartReducer,
  User: userReducer,
});

const middleware = applyMiddleware(thunk);
const store = createStore(rootReducer, middleware);

export default store;
