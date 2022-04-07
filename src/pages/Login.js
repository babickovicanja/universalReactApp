import React, {useState} from "react"
import {Link} from "react-router-dom"

import "../styles/login.css"

function Login() {
  const [passwordShown, setPasswordShown] = useState(false);
  
  const togglePassword = (event) => {
    event.preventDefault()
    setPasswordShown(!passwordShown);
  };

  return (
    <div className="login-background">
      <div className="login-form-container">
        <img src="../../images/universal-logo.png" className="form-logo" alt="universal logo" />
        <div className="login-text-container">
          <p className="login-text">Login</p>
        </div>
        <form className="login-form">
          <input type="email" placeholder="Email" className="input-email"/>
          <div className="password-wrapper">
            <input type={passwordShown ? "text" : "password"} placeholder="Password" className="input-password" />
            <button onClick={togglePassword} className="input-password-img"><img src="../../images/show-password.png" alt="" /></button>
          </div>
          <Link to="/users"><button type="submit" class="submit-button">Submit</button></Link>
        </form>
      </div>
    </div>
    
  )
}

export default Login