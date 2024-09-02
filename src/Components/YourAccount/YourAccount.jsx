import React from 'react';
import './YourAccountstyle.css';
import jack from '../../assets/jack.png'
const YourAccount = () => {
  return (
    <div className="account-container">
      <div className="account-sidebar">
        <div className="profile-section">
          <img className="profile-pic" src={jack} alt="Profile" />
          <h2 className="username">InnovoteX</h2>
        </div>
        <div className="account-options">
          <ul>
            <li>My Channel</li>
            <li>Switch Account</li>
            <li>Sign Out</li>
          </ul>
        </div>
      </div>
      <div className="account-content">
        <h1>Account Overview</h1>
        <div className="overview-section">
          <div className="overview-item">
            <h3>Profile</h3>
            <p>Edit your personal information.</p>
          </div>
          <div className="overview-item">
            <h3>Settings</h3>
            <p>Manage your account settings and preferences.</p>
          </div>
          <div className="overview-item">
            <h3>Privacy</h3>
            <p>Control your privacy settings.</p>
          </div>
          <div className="overview-item">
         <h3><i class="fa fa-sticky-note-o"></i> Publish Post</h3>
         <p>Create and upload post</p>
         </div>

        </div>
      </div>
    </div>
  );
}

export default YourAccount;
