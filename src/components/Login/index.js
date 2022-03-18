import "./login.scss";
import "animate.css";
import React, { useEffect, useRef, useState } from "react";
import InputLogin from "../common/inputLogin";
import { FcGoogle } from "react-icons/fc";
import { RiFacebookCircleLine } from "react-icons/ri";
import socialLogin, {
  facebookProvider,
  googleProvider,
} from "./authWithFirebase";
import { useDispatch, useSelector } from "react-redux";
import {
  addUserAsync,
  getCurrentUser,
  getCurrentUserAsync,
} from "../../store/users/action";
import { useNavigate } from "react-router-dom";
import { handleErrorLogin } from "./handleErrorLogin";

function Login({ setShowLoginPage, loginClass }) {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  function handleSignInWithSocial(provider) {
    socialLogin(provider, setUser);
  }

  const users = useSelector((state) => state.User.users);
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (users.some((x) => x?.email === user?.email)) {
      users?.forEach((x) => {
        if (x.email === user.email) dispatch(getCurrentUserAsync(x.id));
        navigate("/");
      });
    } else {
      dispatch(addUserAsync(user));
      if (user) navigate("/");
    }
  }, [user]);

  const fromRef = useRef(null);

  function handleClickLogin(e) {
    e.preventDefault();
    users.forEach((user) => {
      if (
        user.email === loginData.email &&
        user.password === loginData.password
      ) {
        dispatch(getCurrentUser(user));
        navigate("/");
      }

      if (
        user.email != loginData.email ||
        user.password != loginData.password
      ) {
        handleErrorLogin(loginData, user, fromRef.current);
      }
    });
  }

  return (
    <div className={`animate__animated ${loginClass}`}>
      <h2 className="mb-3">Well come to Commercial Web</h2>

      <form ref={fromRef} className="register-form">
        <InputLogin
          label="Email"
          inputType="email"
          placeholder="Enter you email"
          name="email"
          onChangeInput={(e) =>
            setLoginData({
              ...loginData,
              email: e.target.value,
            })
          }
        />
        <InputLogin
          label="Password"
          inputType="password"
          placeholder="Enter your password"
          name="password"
          onChangeInput={(e) =>
            setLoginData({
              ...loginData,
              password: e.target.value,
            })
          }
        />

        <div className="login-button d-flex justify-content-between">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={(e) => handleClickLogin(e)}
          >
            Login
          </button>

          <button
            className="btn btn-outline-primary btn-sm"
            onClick={() => setShowLoginPage("register")}
          >
            Create new account
          </button>
        </div>

        <div className="social-login d-flex justify-content-between mt-4 pt-4 border-secondary border-top border-secondary ">
          <div
            className="social-login__google social-login__button"
            onClick={() => handleSignInWithSocial(googleProvider)}
          >
            <FcGoogle size={25} className="social-login__icon" />
            SIGN UP WITH GOOGLE
          </div>
          <div
            className="social-login__facebook social-login__button"
            onClick={() => handleSignInWithSocial(facebookProvider)}
          >
            <RiFacebookCircleLine
              size={27}
              color="blue"
              className="social-login__icon"
            />
            SIGN UP WITH FACEBOOK
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
