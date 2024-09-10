import React, { useState } from 'react';
import './Loginstyle.css';

const LoginSignup = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [step, setStep] = useState(1);
  const [preferences, setPreferences] = useState([]);

  const handleToggle = () => {
    setIsSignup(!isSignup);
    setStep(1); // Reset to step 1 when toggling between Login and Signup
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handleSkipStep = () => {
    setStep(3); // Skip to confirmation
  };

  const handlePreferenceChange = (preference) => {
    setPreferences((prev) =>
      prev.includes(preference)
        ? prev.filter((item) => item !== preference)
        : [...prev, preference]
    );
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    setIsSignup(false); // Switch to the login form after signup
    setStep(1); // Reset to the first step of the login form
  };

  return (
    <div className="login-container">
      <div className="form-container">
        <h1>{isSignup ? 'Sign Up' : 'Login'}</h1>

        {isSignup && step === 1 && (
          <form onSubmit={handleNextStep}>
            <input type="text" placeholder="Username" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Next</button>
          </form>
        )}

        {isSignup && step === 2 && (
          <>
            <div className="preference-container">
              <h2>Preference</h2>
              <div className="preferences">
                {[
                  'Web Dev',
                  'Data Science',
                  'Blockchain',
                  'Frontend',
                  'Backend',
                  'Full Stack',
                  'Machine Learning',
                  'App Dev',
                  'Cyber Security',
                  'AI',
                ].map((pref) => (
                  <div
                    key={pref}
                    className={`preference ${
                      preferences.includes(pref) ? 'selected' : ''
                    }`}
                    onClick={() => handlePreferenceChange(pref)}
                  >
                    {pref}
                  </div>
                ))}
              </div>
            </div>
            <div className="form-actions">
              <button type="button" onClick={handleSkipStep}>Skip</button>
              <button type="button" onClick={handleNextStep}>Confirm</button>
            </div>
          </>
        )}

        {isSignup && step === 3 && (
          <>
            <h2>Confirmation</h2>
            <p>Please confirm your information and preferences.</p>
            <button type="submit" onClick={handleSignupSubmit}>
              Sign Up
            </button>
          </>
        )}

        {!isSignup && (
          <form>
            <input type="text" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Login</button>
          </form>
        )}

        <button className="toggle-btn" onClick={handleToggle}>
          {isSignup ? 'Already have an account? Login' : 'Need an account? Sign Up'}
        </button>
      </div>
    </div>
  );
};

export default LoginSignup;
