import "./style.scss";

import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Login from "../components/Login";
import Register from "../components/Register";

function LoginPage() {
  const [showLogin, setShowLoginPage] = useState("login");
  const [loginClass, setLoginClass] = useState("animate__bounceInLeft");

  useEffect(() => {
    showLogin === "login"
      ? setLoginClass("animate__bounceInLeft")
      : setLoginClass("animate__backOutRight");
  }, [showLogin]);

  let registerClass =
    showLogin === "login" ? "animate__backOutLeft" : "animate__bounceInRight";

  return (
    <Layout>
      <div className="login-page">
        {showLogin === "login" ? (
          <Login setShowLoginPage={setShowLoginPage} loginClass={loginClass} />
        ) : (
          <Register
            setShowLoginPage={setShowLoginPage}
            registerClass={registerClass}
          />
        )}
      </div>
    </Layout>
  );
}

export default LoginPage;
