import React from 'react'
import '../Pages/Css/Login.css'
const Login = () => {
  return (
    <div>
      <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign up</h1>
      
      <div className="loginsignup-fields">
        <input type="text" placeholder='yourname' />
        <input type="text" placeholder='email' />
        <input type="text" placeholder='password' />
      </div>
      
      <button>Continue</button>
    
      <div className="loginsignup-login">Already have an account ? <span>Login</span></div>
      <div className="loginsignup-agree">
        <input type="checkbox" />
        <p>By continuing, i agree to the terms of use & privacy policy.</p>
      </div>
</div>
      </div>
    </div>
  )
}

export default Login