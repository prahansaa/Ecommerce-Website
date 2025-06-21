import React, { useState } from 'react';
import Register_form from '../Components/Register_form.css';
import { NavLink, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast } from 'react-toastify';
const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [error, setError] = useState('');
    const [strength, setStrength] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{6,}$/;

    const navigate = useNavigate();

    const checkStrength = (pwd) => {
        if (pwd.length < 6) {
            return "Weak";
        } else if (pwd.length < 10) {
            return "Average";
        } else {
            return "Strong";
        }
    };

    const data = (e) => {
        e.preventDefault();

        if (!name.trim() || !email.trim() || !password.trim() || !confirm.trim()) {
            toast.error('All field are required');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            toast.error('Please enter a valid email');
            return;
        }

        if (password.length < 6) {
            toast.error('Password must be at least 6 characters');
            return;
        }

        if (!passwordRegex.test(password)) {
            toast.error('Password must contain at least 1 uppercase, 1 lowercase, 1 number, and 1 special character');
            return;
        }

        if (password !== confirm) {
            toast.error('Passwords does not match');
            return;
        }
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        setStrength(checkStrength(password));
        navigate("/login");
    };

    return (
        <div className='signup'>
            <div className="container">
                <div className="signup-form">
                    <h2 className="mb-4 text-center">Sign Up</h2>
                    <form onSubmit={data}>
                        <div className="mb-3">
                            <label htmlFor="fullName" className="form-label">Full Name</label>
                            <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} id="fullName" placeholder="Enter Full name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="emailAddress" className="form-label">Email Address</label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="emailAddress" placeholder="Enter Email" />
                        </div>
                        <div className="mb-3 position-relative">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    setStrength(checkStrength(e.target.value));
                                }}
                                className="form-control"
                                id="password"
                                placeholder="Password"
                            />
                            <span
                                onClick={() => setShowPassword(!showPassword)}
                                style={{
                                    position: "absolute",
                                    top: "38px",
                                    right: "15px",
                                    cursor: "pointer"
                                }}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                            <span style={{ color: strength === 'Strong' ? 'green' : strength === 'Average' ? 'orange' : 'red' }}>
                                {strength}
                            </span>
                        </div>

                        <div className="mb-3 position-relative">
                            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                            <input
                                type={showConfirm ? "text" : "password"}
                                value={confirm}
                                onChange={(e) => setConfirm(e.target.value)}
                                className="form-control"
                                id="confirmPassword"
                                placeholder="Confirm Password" />
                            <span
                                onClick={() => setShowConfirm(!showConfirm)}
                                style={{
                                    position: "absolute",
                                    top: "38px",
                                    right: "15px",
                                    cursor: "pointer"
                                }}
                            >
                                {showConfirm ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>

                        <button type="submit" className="btn btn-primary w-100">Create Account</button>
                        <p className="text-center mt-3">Already have an account? <NavLink to="/login">Login Here</NavLink></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
