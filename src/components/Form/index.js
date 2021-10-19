import React from "react";
import email from "../../assets/email.png";
import pass from "../../assets/pass.png";
import './style.css'

const Form = () => {
  return (
    <section className="login-form">
      <h1>Member Login</h1>
      <label>
        <img className="icon" src={email} alt="" />
        <input type="email" name="" id="" placeholder="Email" />
      </label>

      <label>
        <img className="icon" src={pass} alt="" />
        <input type="password" name="" id="" placeholder="Senha" />
      </label>
      <input type="button" value="LOGIN" />

      <div className="footer">
        <p>
          <a href="/">Esqueceu sua senha?</a>
        </p>
        <hr />
        <p>
          <a href="/">Cadastre uma conta</a>
        </p>
      </div>
    </section>
  );
};

export default Form;
