import "./inputLogin.scss";
import React, { useEffect, useState } from "react";
import { BiHide, BiShow } from "react-icons/bi";

function InputLogin({
  label,
  inputType = "text",
  placeholder = "",
  name = "",
  onChangeInput = null,
}) {
  const [isShowPassword, setIsHidePassword] = useState(false);
  const [defautInputType, setDefautInputType] = useState("text");

  useEffect(() => {
    if (inputType === "password") setDefautInputType(inputType);
  }, []);

  function handleClickShowHidePassword() {
    if (defautInputType === "text") setDefautInputType("password");
    if (defautInputType === "password") setDefautInputType("text");
    setIsHidePassword(!isShowPassword);
  }

  return (
    <div className="row mb-3">
      <label htmlFor={label} className="col-sm-2 col-form-label">
        {label}
      </label>
      <div className="col-lg ">
        <div className="input-wrapper">
          <input
            type={defautInputType}
            className="form-control"
            id={label}
            name={name}
            autoComplete=""
            placeholder={placeholder}
            onChange={onChangeInput ? (e) => onChangeInput(e) : () => {}}
          />
          {inputType === "password" && (
            <div
              className="show-hide-password"
              onClick={handleClickShowHidePassword}
            >
              {isShowPassword ? <BiShow /> : <BiHide />}
            </div>
          )}
        </div>
        <div className="invalid-feedback">This is text content</div>
      </div>
    </div>
  );
}

export default InputLogin;
