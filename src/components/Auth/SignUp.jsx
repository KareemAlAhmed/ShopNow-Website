import React, { useEffect, useState } from 'react'
import "../styles/SignUp.css"
import { Link, useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import {  createUser, setSignError } from '../store/slicers/userSlicer';
export default function SignUp() {
    const [username,setUsername]=useState("");
    const [email,setEmail]=useState("");
    const [phone,setPhone]=useState("");
    const [pass,setPass]=useState("");
    const [confPass,setConfPass]=useState("");
    const [passwordStrength, setPasswordStrength] = useState({
        text: 'Weak',
        class: 'strength-weak'
    });
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const {error,currentUser}=useSelector(s=>s.user);

    useEffect(()=>{
        if(Object.keys(currentUser).length !== 0){
            navigate("/");
        }
    },[currentUser,navigate]);
    
    function checkPassStrength(password) {
        let strength = 0;
        
        if (password.length >= 8) strength++;
        if (password.match(/[a-z]/) && password.match(/[A-Z]/)) strength++;
        if (password.match(/\d/)) strength++;
        if (password.match(/[^a-zA-Z\d]/)) strength += 2;

        let strengthText = 'Weak';
        let strengthClass = 'strength-weak';

        if (strength <= 2) {
            strengthText = 'Weak';
            strengthClass = 'strength-weak';
        } else if (strength === 3) {
            strengthText = 'Medium';
            strengthClass = 'strength-medium';
        } else {
            strengthText = 'Strong';
            strengthClass = 'strength-strong';
        }

        setPasswordStrength({
            text: strengthText,
            class: strengthClass
        });
        setPass(password);
    }

    function validateForm() {
        const newErrors = {};

        // Username validation
        if (!username.trim()) {
            newErrors.username = 'Please enter your full name';
        }

        // Email validation
        if (!email.trim()) {
            newErrors.email = 'Please enter your email address';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        // Password validation
        if (!pass) {
            newErrors.password = 'Please enter a password';
        } else if (pass.length < 8) {
            newErrors.password = 'Password must be at least 8 characters';
        }

        // Confirm password validation
        if (!confPass) {
            newErrors.confirmPassword = 'Please confirm your password';
        } else if (pass !== confPass) {
            
            newErrors.confirmPassword = 'Passwords do not match';
        }
        dispatch(setSignError(newErrors));
        return Object.keys(newErrors).length === 0;
    }

    function submitData(e) {
        e.preventDefault();
        if (validateForm()) {
            dispatch(createUser({
                "username": username,
                "email": email,
                "password": pass,
                "phone": phone
            }));
        }
    }

  return (
        <div className="signup-page">
            <div className="container">
                <div className="signup-container">
            
                    <div className="signup-form-container">
                        <div className="signup-header">
                            <h1>Create Your Account</h1>
                            <p>Join thousands of happy shoppers today</p>
                        </div>

                        <form id="signupForm" onSubmit={e=>{submitData(e)}}>
                            <div className="form-group">
                                <label className="form-label">Full Name</label>
                                <input 
                                    type="text" 
                                    className={`form-input ${error.username ? 'error' : ''}`} 
                                    placeholder="Enter your full name" 
                                    value={username} 
                                    onChange={(e) => setUsername(e.target.value)} 
                                />
                                {error.username && <div className="error-message">{error.username}</div>}
                                
                            </div>

                            <div className="form-group">
                                <label className="form-label">Email Address</label>
                                <input 
                                    type="email" 
                                    className={`form-input ${error.email ? 'error' : ''}`} 
                                    placeholder="Enter your email" 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)} 
                                />
                                {error.email && <div className="error-message">{error.email}</div>}
                            </div>

                            <div className="form-group">
                                <label className="form-label">Phone Number</label>
                                <input 
                                    type="tel" 
                                    className="form-input" 
                                    placeholder="Enter your phone number" 
                                    value={phone} 
                                    onChange={(e) => setPhone(e.target.value)}  
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">Password</label>
                                <input 
                                    type="password" 
                                    className={`form-input ${error.password ? 'error' : ''}`} 
                                    placeholder="Create a password" 
                                    value={pass} 
                                    onChange={(e) => checkPassStrength(e.target.value)} 
                                />
                                {error.password && <div className="error-message">{error.password}</div>}
                                <div className="password-strength">
                                    <div>Password strength: <span id="strength-text">{passwordStrength.text}</span></div>
                                    <div className="strength-bar">
                                        <div className={`strength-fill ${passwordStrength.class}`} id="strength-fill"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-label">Confirm Password</label>
                                <input 
                                    type="password" 
                                    className={`form-input ${error.confirmPassword ? 'error' : ''}`} 
                                    placeholder="Confirm your password" 
                                    value={confPass} 
                                    onChange={(e) => setConfPass(e.target.value)} 
                                />

                                {error.confirmPassword &&   <div className="error-message">{error.confirmPassword}</div> }
                            </div>

                            <div className="terms-agreement">
                                <input type="checkbox" id="terms" required />
                                <label htmlFor="terms">
                                    I agree to the <a href="terms.html">Terms of Service</a> and <a href="privacy.html">Privacy Policy</a>
                                </label>
                            </div>

                            <button type="submit" className="btn">Create Account</button>
                        </form>

                        <div className="divider">
                            <span>Or sign up with</span>
                        </div>

                        <div className="social-signup">
                            <button className="social-btn google">
                                <i className="fab fa-google"></i>
                                Google
                            </button>
                            <button className="social-btn facebook">
                                <i className="fab fa-facebook-f"></i>
                                Facebook
                            </button>
                        </div>

                        <div className="signup-footer">
                            <p>Already have an account? <Link to="/login">Log in</Link></p>
                        </div>
                    </div>


                    
                </div>
            </div>
    </div>
  )
}
