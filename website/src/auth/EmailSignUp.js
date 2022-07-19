import {
  AuthErrorCodes,
  getAuth,
  connectAuthEmulator,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import React, { useEffect } from "react";
import "./EmailSignUp.css";
import { auth } from "../firebase";
import { useState } from "react";

function ReSignup(){
  var auth = getAuth();
  
  function signUp(){
    const email = document.querySelector("#txtEmail").value
    const password= document.querySelector("#txtPassword").value
    
    createUserWithEmailAndPassword(auth, email, password)
    
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      const loginAlert= document.querySelector('.login-now')
      if (user){
        loginAlert.innerHTML="Logged in"
      }else{
        loginAlert.innerHTML="not logged in"
      }
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
    console.log(email)

  }
  
    

    return (
      <div>
        <div className="not-logged-in">
          <label>
            <span className="define">Email</span>
            <input type="email" className="box-auth" id="txtEmail" ></input>
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
          <button type="button" id="btnLogin" >
            Log in
          </button>
          <button type="button" id="btnSignup" onClick={signUp} >
            Sign Up
          </button>
        </div>
        <div id="logged-in">
          <button type="button" id="btnLogout">
            Log out
          </button>
        </div>
        <div className="login-now"></div>
      </div>
    );
  };

  // btnLogin.addEventListener("click", loginEmailPassword)

export default ReSignup