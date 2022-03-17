import "./register.scss";
import React, { useEffect, useRef, useState } from "react";

import InputLogin from "../common/inputLogin";
import { validateInput, validedateData } from "../common/validateForm";
import validatePasswordConfirm, {
  checkPasswordConfirmEmpty,
} from "./passwordConfirmValidation";
import { useDispatch, useSelector } from "react-redux";
import { addUserAsync } from "../../store/users/action";
import { useNavigate } from "react-router-dom";

function Register({ setShowLoginPage, registerClass }) {
  const allUser = useSelector((state) => state.User.users);
  const dispatch = useDispatch();
  const naviate = useNavigate();
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    "re-password": "",
    productCart: [],
  });

  const formRef = useRef();
  useEffect(() => {
    validatePasswordConfirm(
      formRef.current,
      registerData.password,
      registerData["re-password"]
    );
  }, [registerData["re-password"]]);

  validateInput(formRef.current, allUser);
  async function handleSubmitRegisterForm(e) {
    const checkPassConfirm = checkPasswordConfirmEmpty(
      formRef.current,
      registerData.password,
      registerData["re-password"]
    );

    e.preventDefault();
    const isValid = await validedateData(formRef, registerData, allUser);

    if (isValid && checkPassConfirm) {
      dispatch(addUserAsync(registerData));
      naviate("/");
    }
  }

  return (
    <div>
      <div className={`container-sm animate__animated ${registerClass}`}>
        <h2 className="mb-3">User Register</h2>

        <form ref={formRef} className="register-form">
          <InputLogin
            label="Name"
            name="name"
            placeholder="Enter your name"
            onChangeInput={(e) =>
              setRegisterData({
                ...registerData,
                name: e.target.value,
              })
            }
          />
          <InputLogin
            label="Email"
            name="email"
            inputType="email"
            placeholder="Enter your email"
            onChangeInput={(e) =>
              setRegisterData({
                ...registerData,
                email: e.target.value,
              })
            }
          />
          <InputLogin
            label="Phone number"
            name="phone"
            inputType="tel"
            placeholder="Enter your phone number"
            onChangeInput={(e) =>
              setRegisterData({
                ...registerData,
                phone: e.target.value,
              })
            }
          />
          <InputLogin
            label="Password"
            name="password"
            inputType="password"
            placeholder="Enter your password"
            onChangeInput={(e) =>
              setRegisterData({
                ...registerData,
                password: e.target.value,
              })
            }
          />
          <InputLogin
            label="Re-password"
            name="re-password"
            inputType="password"
            placeholder="Re-enter your password"
            onChangeInput={(e) =>
              setRegisterData({
                ...registerData,
                "re-password": e.target.value,
              })
            }
          />

          <div className="register-button d-flex justify-content-between">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={(e) => handleSubmitRegisterForm(e)}
            >
              Register
            </button>

            <button
              className="btn btn-outline-primary btn-sm"
              onClick={() => setShowLoginPage("login")}
            >
              I have an account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
