import React from 'react';
import './ContentStyle.css'

const Content = ({ title, description, photoUrl, videoUrl }) => {
  return (
    <div className="content-container">
     
      <div className="content-section">
        <h2 className="content-title">{title}</h2>
        <p className="content-description">{description}</p>
      </div>
    
      {photoUrl && (
        <div className="photo-section">
          <img 
            src={photoUrl} 
            alt="Content" 
            className="content-photo" 
          />
        </div>
      )}
      {videoUrl && (
        <div className="video-section">
          <video className="content-video" controls>
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
}

export default Content;
