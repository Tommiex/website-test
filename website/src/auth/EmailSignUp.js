import { 
    AuthErrorCodes,
    getAuth,
    connectAuthEmulator,
    signInWithEmailAndPassword 
} from "firebase/auth"
import React from "react"
import './EmailSignUp.css'
import { auth } from "../firebase";


export const txtEmail = document.querySelector("#txtEmail")
export const txtPassword = document.querySelector("#txtPassword")
export const txtPasswordConfirm = document.querySelector("#txtPasswordConfirm")

export const btnLogin = document.querySelector("#btnLogin")
export const btnSignup = document.querySelector("#btnSignup")
export const btnLogout = document.querySelector("#btnLogout")

export const divLoginError = document.querySelector('#divLoginError')
export const lblLoginErrorMessage = document.querySelector('#lblLoginErrorMessage')

export const hideLoginError = ()=>{
    divLoginError.style.display='none'
    lblLoginErrorMessage.innerHTML=''
}
export const showLoginError = (error)=>{
    divLoginError.style.display='block'
    if (error.code === AuthErrorCodes.INVALID_PASSWORD){
        lblLoginErrorMessage.innerHTML = `Wrong password. Try Again`
    }
    else{
        lblLoginErrorMessage.innerHTML=`Error: ${error.message}`
    }
}

export default function Signup(){
    connectAuthEmulator(auth, "http://localhost:3000");   
    const loginEmailPassword= async ()=>{
        const loginEmail =  txtEmail.value;
        const loginPassword =  txtPassword.value;

        const userCredential = await signInWithEmailAndPassword(auth,loginEmail,loginPassword)
        console.log(userCredential.user)
        
    }
    // btnLogin.addEventListener("click", loginEmailPassword) 
   
    return(
        <form id="input-login">
            <div className="login">
                <label>
                    <span className="define">Email</span>
                    <input type="email"  className="box-auth" id="txtEmail"></input>
                </label>
                <label>
                    <span className="define">Password</span>
                    <input type="password"  className="box-auth" id="txtPassword"></input>
                </label>
                <label>
                    <span className="define">Password confirmation</span>
                    <input type="password" className="box-auth" id="txtPasswordConfirm"></input>
                </label>
                <div id="divLoginError" className="group">
                    <div id="lblLoginErrorMessage" className="errorlabel">Error message</div>
                </div>
            </div>
            <button type="button" id="btnSignup">Sign Up</button>
            <button type="button" id="btnLogin" onClick={loginEmailPassword}>Log in</button>
            <button type="button" id="btnLogout">Log out</button>
            
        </form>
    )
}