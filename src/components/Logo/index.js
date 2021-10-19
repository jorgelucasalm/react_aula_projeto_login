import React from "react";
import loginImage from "../../assets/login.png";
import './style.css'

const Logo = () => {
  return (
    <section className="login-image">
      <img src={loginImage} alt="" />
    </section>
  );
};

export default Logo;
