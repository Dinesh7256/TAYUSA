import React, { useState } from 'react';
import './Shortsstyle.css';
import { FaHeart, FaComment, FaShare, FaBookmark } from 'react-icons/fa';
import video1ForYou from '../../assets/shortvideo.mp4';
import video1Following from '../../assets/shortvideo.mp4';
const Shorts = () => {
  const [tab, setTab] = useState('following','forYou'); // State to track the selected tab
  const handleTabChange = (newTab) => {
    setTab(newTab);
  };
  
  const videoSrc = tab === 'forYou' ? video1ForYou : video1Following;
  return (
    <div className="shorts-container">
      <div className="tabs">
        <button 
          className={`tab-button ${tab === 'forYou' ? 'active' : ''}`} 
          onClick={() => handleTabChange('forYou')}
        >
          For You
        </button>
        <button 
          className={`tab-button ${tab === 'following' ? 'active' : ''}`} 
          onClick={() => handleTabChange('following')}
        >
          Following
        </button>
      </div>
      
      <div className="short-video">
        <video className="video" controls autoPlay muted loop>
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay">
          <div className="video-info">
            <p className="video-title">{tab === 'forYou' ? 'Data Patterns in ML' : 'Data Patterns in ML'}</p>
            <p className="video-description">{tab === 'forYou' ? '#shorts #education #technology' : '#shorts #mlpatterns #learning'}</p>
          </div>
          <div className="actions">
            <button className="action-button">
              <FaHeart className="action-icon" />
              <p className="action-label"></p>
            </button>
            <button className="action-button">
              <FaComment className="action-icon" />
              <p className="action-label"></p>
            </button>
            <button className="action-button">
              <FaShare className="action-icon" />
              <p className="action-label"></p>
            </button>
            <button className="action-button">
              <FaBookmark className="action-icon" />
              <p className="action-label"></p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Shorts;
