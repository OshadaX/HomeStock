import React, { useEffect } from 'react';
import './Login.css';

function Login() {
  useEffect(() => {
    const container = document.querySelector('.container');
    const registerBtn = document.querySelector('.register-btn');
    const loginBtn = document.querySelector('.login-btn');

    registerBtn.addEventListener('click', () => {
      container.classList.add('active');
    });

    loginBtn.addEventListener('click', () => {
      container.classList.remove('active');
    });

    // Cleanup event listeners on component unmount
    return () => {
      registerBtn.removeEventListener('click', () => {
        container.classList.add('active');
      });

      loginBtn.removeEventListener('click', () => {
        container.classList.remove('active');
      });
    };
  }, []);

  return (
    <div className="container">
      <div className="form-box login">
        <form action="">
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" name="" placeholder="Enter your username" required="required" />
            <i className="bx bxs-user"></i>
          </div>
          <div className="input-box">
            <input type="password" name="" placeholder="Enter your password" required="required" />
            <i className="bx bxs-lock-alt"></i>
          </div>
          <div className="forgot-link">
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit" className="btn">Login</button>
          <div className="social-icons">
            <a href="#"><i className="bx bxl-facebook"></i></a>
            <a href="#"><i className="bx bxl-twitter"></i></a>
            <a href="#"><i className="bx bxl-google"></i></a>
          </div>
        </form>
      </div>
      <div className="form-box register">
        <form action="">
          <h1>Register</h1>
          <div className="input-box">
            <input type="text" name="" placeholder="Enter your username" required="required" />
            <i className="bx bxs-user"></i>
          </div>
          <div className="input-box">
            <input type="email" name="" placeholder="Enter your email" required="required" />
            <i className="bx bxs-envelope"></i>
          </div>
          <div className="input-box">
            <input type="password" name="" placeholder="Enter your password" required="required" />
            <i className="bx bxs-lock-alt"></i>
          </div>
          <button type="submit" className="btn">Register</button>
          <div className="social-icons">
            <a href="#"><i className="bx bxl-facebook"></i></a>
            <a href="#"><i className="bx bxl-twitter"></i></a>
            <a href="#"><i className="bx bxl-google"></i></a>
          </div>
        </form>
      </div>
      <div className="toggle-box">
        <div className="toggle-panel toggle-left">
          <h1>Hello Welcome !</h1>
          <p>Don't have an account?</p>
          <button className="btn register-btn">Register</button>
        </div>
        <div className="toggle-panel toggle-right">
          <h1>Welcome! Back</h1>
          <p>Already have an account?</p>
          <button className="btn login-btn">Login</button>
        </div>
      </div>
    </div>
  );
}

export default Login;