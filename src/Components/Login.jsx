import React, { useState } from "react";
import Login_form from "./Login_form.css";
import { NavLink } from "react-router-dom";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast } from 'react-toastify';
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState(localStorage.getItem('email'));
  const [password, setPassword] = useState(localStorage.getItem(''));

  const data = (e) => {
    e.preventDefault();

    const storedPassword = localStorage.getItem('password');
    const storedEmail = localStorage.getItem('email');

    if (storedEmail !== email) {
      toast.error('No user found. Please register first.');
      return;
    }

    if (email !== storedEmail || password !== storedPassword) {
      toast.error('Invalid email or password');
      return;
    }
    toast.success('Login successful!');
  };

  return (
    <>
      <div className="login">
        <div className="container">
          <div className="login-box">
            <h4 className="form-title">Login to Your Account</h4>
            <form onSubmit={data}>
              <div className="mb-3">
                <label for="loginEmail" className="form-label">Email address</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="loginEmail" placeholder="Enter email" />
              </div>
              <div className="mb-3 position-relative">
                <label for="loginPassword" className="form-label">Password</label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="form-control"
                  id="loginPassword"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span onClick={() => { setShowPassword(!showPassword) }} style={{
                  position: "absolute",
                  top: "38px",
                  right: "15px",
                  cursor: "pointer"
                }} >{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="rememberMe" />
                <label className="form-check-label" for="rememberMe">Remember me</label>
              </div>
              <button type="submit" className="btn btn-primary w-100">Login</button>
              <p className="text-center mt-3"> Don't have an account?
                <NavLink to="/register">  Register Here </NavLink>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
