import {
  AuthErrorCodes,
  getAuth,
  connectAuthEmulator,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import React from "react";
import "./EmailSignUp.css";
import { auth } from "../firebase";
import { useState } from "react";

export const txtEmail = document.querySelector("#txtEmail");
export const txtPassword = document.querySelector("#txtPassword");
export const txtPasswordConfirm = document.querySelector("#txtPasswordConfirm");

export const btnLogin = document.querySelector("#btnLogin");
export const btnSignup = document.querySelector("#btnSignup");
export const btnLogout = document.querySelector("#btnLogout");

export const divLoginError = document.querySelector("#divLoginError");
export const lblLoginErrorMessage = document.querySelector(
  "#lblLoginErrorMessage"
);

export const hideLoginError = () => {
  divLoginError.style.display = "none";
  lblLoginErrorMessage.innerHTML = "";
};
export const showLoginError = (error) => {
  divLoginError.style.display = "block";
  if (error.code === AuthErrorCodes.INVALID_PASSWORD) {
    lblLoginErrorMessage.innerHTML = `Wrong password. Try Again`;
  } else {
    lblLoginErrorMessage.innerHTML = `Error: ${error.message}`;
  }
};

const ReSignup = ({onSubmit}) => {
    const [pathName, setPathname] = useState(null);
  const onFinish = (values) => {
    console.log("Success:", values);
    onSubmit(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const signup = () => {
    const handleSubmit = async (values) => {
      const { email, password } = values;

      try {
        await createUserWithEmailAndPassword(auth, email, password);
      } catch (error) {
        alert(error);
      }
    };

    return (
      <div
      id="input-login"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}

        
      >
        <div className="login"
        >
          <label>
            <span className="define">Email</span>
            <input type="email" className="box-auth" id="txtEmail"></input>
          </label>
          <label>
            <span className="define">Password</span>
            <input
              type="password"
              className="box-auth"
              id="txtPassword"
            ></input>
          </label>
          <label>
            <span className="define">Password confirmation</span>
            <input
              type="password"
              className="box-auth"
              id="txtPasswordConfirm"
            ></input>
          </label>
          <div id="divLoginError" className="group">
            <div id="lblLoginErrorMessage" className="errorlabel">
              Error message
            </div>
          </div>
        </div>
        <button type="button" id="btnSignup" onClick={handleSubmit}>
          Sign Up
        </button>
        <button type="button" id="btnLogin">
          Log in
        </button>
        <button type="button" id="btnLogout">
          Log out
        </button>
      </div>
    );
  };

  // btnLogin.addEventListener("click", loginEmailPassword)
};
export default ReSignup