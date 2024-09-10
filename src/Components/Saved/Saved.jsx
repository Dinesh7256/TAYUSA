import React from 'react';
import './Savedstyle.css';
import video1 from '../../assets/java1.mp4';
import video2 from '../../assets/webdev.mp4';
import shorts from '../../assets/shortvideo.mp4';
import shorts1 from '../../assets/shortvideo1.mp4';
const Saved = () => {
  
  const savedItems = [
    { id: 1, type: 'video', title: 'Video 1', src: video1 },
    { id: 2, type: 'short', title: 'Short 1', src: shorts },
    { id: 3, type: 'video', title: 'Video 2', src: video2 },
    { id: 4, type: 'short', title: 'Short 2', src: shorts1 },
    
  ];
  return (
    <div className="saved-container">
      <h1>Saved Videos and Shorts</h1>
      <div className="saved-grid">
        <div className="videos-section">
          <h2>Videos</h2>
          <div className="saved-items">
            {savedItems.filter(item => item.type === 'video').map(item => (
              <div key={item.id} className="saved-card">
                <video controls className="saved-video">
                  <source src={item.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <h3 className="saved-title">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
        <div className="shorts-section">
          <h2>Shorts</h2>
          <div className="saved-items">
            {savedItems.filter(item => item.type === 'short').map(item => (
              <div key={item.id} className="saved-card">
                <video controls className="saved-video">
                  <source src={item.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <h3 className="saved-title">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Saved;