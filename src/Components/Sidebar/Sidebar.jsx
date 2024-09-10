import React from "react";
import { Link } from "react-router-dom";
import "./Sidebarstyle.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="shortcut-links">
        <Link className="side-links" to="/home">
          <i className="fas fa-home"></i>
          <p>Videos</p>
        </Link>
        <Link className="side-links" to="/cards">
          <i className="fas fa-th-large"></i>
          <p>ArticeSpace</p>
        </Link>
        <Link className="side-links" to="/shorts">
          <i className="fas fa-film"></i>
          <p>Shorts</p>
        </Link>
        <Link className="side-links" to="/content">
          <i className="fa fa-plus"></i>
          <p>Content</p>
        </Link>
        <Link className="side-links" to="/saved"> 
          <i className="fas fa-save"></i>
          <p>Saved</p>
        </Link>
        <Link className="side-links" to="/your-account">
          <i className="fas fa-user"></i>
          <p>Your Account</p>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
