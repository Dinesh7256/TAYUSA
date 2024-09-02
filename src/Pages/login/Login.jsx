import React, { useState } from 'react';
 import './Loginstyle.css';

function Login() {
  const [isSignup, setIsSignup] = useState(false);

  const handleToggle = () => {
    setIsSignup(!isSignup);
  };

  return (
    <div className="login-container">
      <div className="form-container">
        <h1>{isSignup ? 'Sign Up' : 'Login'}</h1>
        <form>
          <input type="text" placeholder="UserMailID" required />
          <input type="password" placeholder="Password" required />
          {isSignup && <input type="password" placeholder="Confirm Password" required />}
          <button type="submit">{isSignup ? 'Sign Up' : 'Login'}</button>
        </form>
        <button className="toggle-btn" onClick={handleToggle}>
          {isSignup ? 'Already have an account? Login' : 'Need an account? Sign Up'}
        </button>
      </div>
    </div>
  );
}

export default Login;
