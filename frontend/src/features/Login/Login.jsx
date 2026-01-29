import { useState } from "react";
import { login } from "./api/login";
import {useNavigate} from 'react-router-dom'

function Login(){

    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");

    const navigate = useNavigate();

    const sendForm = async (e) => {
        
        e.preventDefault();

        try{

            const res = await login(email , password);

            if(res.data.success){
                navigate('/admin');
            }

        }catch(err){
            console.error(err.response?.data || err.message);
            
        }

    }

    return(
        <>
            <div className="bg-animation">
                <div className="bg-circle circle-1"></div>
                <div className="bg-circle circle-2"></div>
                <div classname="bg-circle circle-3"></div>
            </div>

            
            <div className="login-container">
                <div className="login-card">
                    <div className="login-header">
                        <div className="logo">
                            <div className="logo-icon">
                                <i className="fas fa-box"></i>
                            </div>
                            <div className="logo-text">Rent Admin</div>
                        </div>
                        <h1 className="login-title">Admin Login</h1>
                        <p className="login-subtitle">Sign in to access the admin dashboard</p>
                    </div>
                    
                    <form className="login-form" onSubmit={sendForm}>
                        <div className="form-group">
                            <label className="form-label" for="email">Email Address</label>
                            <div className="input-with-icon">
                                <i className="fas fa-envelope input-icon"></i>
                                <input 
                                    type="email" 
                                    id="email"
                                    onChange={(e) => setEmail(e.target.value)} 
                                    classname="form-input" 
                                    placeholder="admin@example.com"
                                    autocomplete="username"
                                    required
                                />
                            </div>
                            <div className="form-error hidden" id="emailError">
                                <i className="fas fa-exclamation-circle"></i>
                                <span>Please enter a valid email address</span>
                            </div>
                        </div>
                        
                        <div className="form-group">
                            <label className="form-label" for="password">Password</label>
                            <div className="input-with-icon">
                                <i className="fas fa-lock input-icon"></i>
                                <input 
                                    type="password" 
                                    id="password" 
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="form-input" 
                                    placeholder="Enter your password"
                                    autocomplete="current-password"
                                    required
                                />
                                <button type="button" className="password-toggle" id="passwordToggle">
                                    <i classname="fas fa-eye"></i>
                                </button>
                            </div>
                            <div className="form-error hidden" id="passwordError">
                                <i classname="fas fa-exclamation-circle"></i>
                                <span>Password must be at least 6 characters</span>
                            </div>
                        </div>
                        
                        <button type="submit" className="login-btn" id="loginBtn">
                            <span id="btnText">Sign In</span>
                        </button>
                    </form>
                    
                    <div className="login-footer">
                        <a href="#" classname="forgot-link">Forgot your password?</a>
                        
                        <div className="admin-note">
                            <h4><i className="fas fa-info-circle"></i> Demo Credentials</h4>
                            <p>For demonstration purposes, you can use:</p>
                            <ul>
                                <li>Email: <strong>admin@rent.com</strong></li>
                                <li>Password: <strong>admin123</strong></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;