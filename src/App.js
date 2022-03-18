import "./App.scss";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductInfo from "./pages/ProductInfo";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import UserPage from "./pages/UserPage";
import AdminPage from "./pages/AdminPage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUserAsyns } from "./store/users/action";
import { getALlCartAsync, getUserCartAsync } from "./store/carts/action";

function App() {
  const currentUser = useSelector((state) => state.User.currentUser);
  console.log("currentUser trong app", currentUser);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUserAsyns());
    dispatch(getALlCartAsync());
    if (currentUser && currentUser?.id)
      dispatch(getUserCartAsync(currentUser.id));
  });
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/cart" element={<CartPage />}></Route>
          <Route path="/:product/:name" element={<ProductInfo />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/user" element={<UserPage />}></Route>
          <Route path="/admin" element={<AdminPage />}></Route>
          <Route path="/" exact element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
