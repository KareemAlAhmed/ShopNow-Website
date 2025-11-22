import React, { useEffect } from 'react'
import NavBar from "../NavBar.jsx"
import Footer from '../Footer.jsx';
import "../styles/Login.css"
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
export default function Login() {
    const navigate=useNavigate();
    const {currentUser}=useSelector(s=>s.user);

    useEffect(()=>{
        if(Object.keys(currentUser).length !== 0){
            navigate("/");
        }
    },[currentUser,navigate]);
  return (
   

        <div className="auth-container">
        <div className="auth-card">
            <div className="auth-header">
                <h2>Welcome Back</h2>
                <p>Sign in to your account</p>
            </div>
            
            <form>
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" placeholder="Enter your email" />
                </div>
                
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Enter your password" />
                </div>
                
                <div className="auth-options">
                    <div className="remember-me">
                        <input type="checkbox" id="remember" />
                        <label htmlFor="remember">Remember me</label>
                    </div>
                    <a href="forgot-password.html" className="forgot-password">Forgot password?</a>
                </div>
                
                <button type="submit" className="btn" style={{width: " 100%"}}>Sign In</button>
                
                <div className="auth-divider">
                    <span>Or continue with</span>
                </div>
                
                <div className="social-login">
                    <button type="button" className="social-btn google">
                        <i className="fab fa-google" style={{color:" #DB4437"}}></i>
                        Google
                    </button>
                    <button type="button" className="social-btn facebook">
                        <i className="fab fa-facebook-f" style={{color:"#4267B2"}}></i>
                        Facebook
                    </button>
                </div>
                
                <div className="auth-footer">
                    <p>Don't have an account? <Link to="/signup" style={{color:"var(--primary)"}}>Sign up</Link></p>
                </div>
            </form>
        </div>
        </div>

   
  )
}
