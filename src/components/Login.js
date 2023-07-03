import { useAnimate } from "framer-motion";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link, useNavigate } from 'react-router-dom'
import { authActions, setIsLogined } from "../store/auth-slice";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const loginState = useSelector(state => state.auth.isLoggedIn)

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    // alert('tests')
    // event.preventDefault();
    dispatch(
      setIsLogined('test payload')
    )

    navigate("/home");

  }

  const handleButtonClick = () => {
    alert(loginState)
  }


  return (
    <div className="login">
      <div className="login_form">
        <img src="https://coachingdetail.com/assets/logo.jpeg" alt="" />
        <h2>Tutor Login</h2>
        <form action="" >
          <input type="hidden" name="name" />
          <div className="email">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="password">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              required
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* disabled={!validateForm()} */}
          <button onClick={handleSubmit} className="btn " >
            Login
          </button>
          <p>
            <a className="link" href="/">
              Forgot Password ? &nbsp;
            </a>
            <a className="click" onClick={handleButtonClick} >
                Click Here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
