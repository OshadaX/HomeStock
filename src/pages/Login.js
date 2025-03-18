import React from 'react';
import './Login.css'

function Login() {
  return (
    <div class="container">
        <div class="form-box login">
            <form action="">
                <h1>Login</h1>
                <div class="input-box">
                    <input type="text" name="" placeholder='Enter your username' required="required" />
                    
                    <i class='bx bxs-user'></i>
                </div>
                <div class="input-box">
                    <input type="password" name="" placeholder='Enter your password' required="required" />
                    
                    <i class='bx bxs-lock-alt'></i>
                </div>
              
                <div class="forgot-link">
                    <a href="#">Forgot Password?</a>
                </div>
                <button type='submit' class="btn">Login</button>
                
                <div class="social-icons">
                    <a href="#"><i class='bx bxl-facebook'></i></a>
                    <a href="#"><i class='bx bxl-twitter'></i></a>
                    <a href="#"><i class='bx bxl-google'></i></a>
                </div>
            </form>
        </div>
        <div class="form-box register">
            <form action="">
                <h1>Register</h1>
                <div class="input-box">
                    <input type="text" name="" placeholder='Enter your username' required="required" />
                    
                    <i class='bx bxs-user'></i>
                </div>
                <div class="input-box">
                    <input type="email" name="" placeholder='Enter your email' required="required" />
                    
                    <i class='bx bxs-envelope'></i>
                </div>
                <div class="input-box">
                    <input type="password" name="" placeholder='Enter your password' required="required" />
                    
                    <i class='bx bxs-lock-alt'></i>
                </div>
              
                
                <button type='submit' class="btn">Register</button>
                
                <div class="social-icons">
                    <a href="#"><i class='bx bxl-facebook'></i></a>
                    <a href="#"><i class='bx bxl-twitter'></i></a>
                    <a href="#"><i class='bx bxl-google'></i></a>
                </div>
            </form>
        </div>
        <div class="toggle-box">
            <div class="toggle-panel toggle-left">
                <h1>Hello Welcome !</h1>
                <p>Dont have an account?</p>
                <button class="btn register-btn">Register</button>
            </div>
        </div>
    </div>


  );
}

export default Login;
