import React, { useState } from "react";
import "../assets/styles/Login.css";
import { auth } from "../server/firestore";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import swal from 'sweetalert';

const Login = () => {
  const dispatch = useDispatch();
  const [LoginPage, setLoginPage] = useState(true);
  const [FullName, setFullName] = useState("");
  const [ProfileURL, setProfileURL] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [LoginEmail, setLoginEmail] = useState("");
  const [LoginPassword, setLoginPassword] = useState("");
 
  const SignupHandler = () => {
    if (FullName != "" && Email != "" && Password != "") {
      auth
        .createUserWithEmailAndPassword(Email, Password)
        .then((userAuth) =>
          userAuth.user.updateProfile({          
            displayName: FullName,
            photoURL: ProfileURL,
          })
        )
       
        .then(() =>
          dispatch(
            login({

              Email: Email,
              Password: Password,
              FullName: FullName,
              ProfileURL: ProfileURL
            })
          )
        )
        .catch((err) => {swal("System Alert!", " This Email already exits")}
        );
    }
    else if(FullName != "" && Password != ""){
      swal("System Alert!", "Please Enter your email")
    }
    else if (FullName != "" && Email != ""){
      swal("System Alert!", "Please Enter your Password")
    }
    else if  ( Email != "" && Password != ""){
      swal("System Alert!", "Please Enter your Full Name")
    }
    else{
      swal("System Alert!", "Please Enter your information")
    }
  };

  const LoginHandler = () => {
    
    auth
      .signInWithEmailAndPassword(LoginEmail, LoginPassword)
      .then((userAuth) =>
        dispatch(
          login({
            Password: userAuth.Password,
            Email: userAuth.email,
            FullName: userAuth.displayName,
            ProfileURL: userAuth.photoURL,
          })
        )
      )
      .catch((err) => {swal("System Alert!", "Incorrect Email or Password")}
      );
  };


  return (
    <div className="LoginContainer">
      <img
        src="https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo.png"
        alt="Linkedin Logo"
      />
      {LoginPage ? (
        <>
          <form>
            <input type="email" value={LoginEmail} onChange={(e)=>setLoginEmail(e.target.value)} placeholder="Enter Email" />
            <input type="password"  value={LoginPassword} onChange={(e)=>setLoginPassword(e.target.value)} placeholder="Enter Password" />
          </form>
          <button class="button" onClick={LoginHandler}>Login</button>
          <p>
            Are you a new user?{" "}
            <span className="register_link" onClick={() => setLoginPage(false)}>
              Register Now
            </span>
          </p>
        </>
      ) : (
        <>
          <form>
            <input
              type="text"
              value={FullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter Full Name"
            />
            <input
              type="text"
              value={ProfileURL}
              onChange={(e) => setProfileURL(e.target.value)}
              placeholder="Enter Profile Photo URL"
            />
            <input
              type="email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
            />
            <input
              type="password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
            />
          </form>
          <button class="button"  onClick={SignupHandler}>Sign up</button>
          <p>
            Go back to the{" "}
            <span className="register_link" onClick={() => setLoginPage(true)}>
              Login Page
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default Login;