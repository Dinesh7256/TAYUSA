import React, { useState } from 'react';
import './CardsStyle.css';
import { FaHeart, FaRetweet, FaComment, FaShare } from 'react-icons/fa';
import profileImage1 from '../../assets/thumbnail1.png'; // replace with your image path
import profileImage2 from '../../assets/thumbnail2.png'; // replace with your image path
import postImage from '../../assets/person.jpg'; // replace with your image path
import postImage1 from '../../assets/thumbnail6.png'; // replace with your image path

function Cards() {
  const [activeTab, setActiveTab] = useState('For You');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="cards-wrapper">
      <div className="tabs">
        <button
          className={`tab-button ${activeTab === 'For You' ? 'active' : ''}`}
          onClick={() => handleTabClick('For You')}
        >
          For You
        </button>
        <button
          className={`tab-button ${activeTab === 'Following' ? 'active' : ''}`}
          onClick={() => handleTabClick('Following')}
        >
          Following
        </button>
      </div>

      <div className="cards-container">
        {activeTab === 'For You' && (
          <div className="card-container">
            <div className="card-header">
              <img src={profileImage1} alt="User Profile" className="profile-image" />
              <div className="card-header-info">
                <h3 className="user-name">Sammer Kumar</h3>
                <p className="user-handle">@SKM</p>
              </div>
            </div>
            <div className="card-body">
              <p className="post-text">Just a few years back, if you had been told that by 2024, you would be able to have a conversation with a computer that would seem almost completely human, would you have believed it?

So what do you think AI will be capable of in ten, twenty or even fifty years’ time?

Of course, it’s impossible to predict for sure – but it seems a fairly safe bet that many things that seem entirely impossible today will be a part of everyday life.

By now, it’s clear that AI is the great breakthrough technology of our times. And as with other breakthrough technologies – fire, steam power, electricity, computing – now it exists, it is only going to continue to evolve and become more capable.

However, one unique feature of AI is its ability to improve itself. As AI helps create more advanced AI, I believe progress will accelerate in ways that we haven’t previously seen.</p>
              <img src={postImage} alt="Post Content" className="post-image" />
            </div>
            <div className="card-footer">
              <button className="footer-button">
                <FaComment className="footer-icon" /> 12
              </button>
              <button className="footer-button">
                <FaRetweet className="footer-icon" /> 24
              </button>
              <button className="footer-button">
                <FaHeart className="footer-icon" /> 48
              </button>
              <button className="footer-button">
                <FaShare className="footer-icon" />
              </button>
            </div>
          </div>
        )}

        {activeTab === 'Following' && (
          <div className="card-container">
            <div className="card-header">
              <img src={profileImage2} alt="User Profile" className="profile-image" />
              <div className="card-header-info">
                <h3 className="user-name">Jane Smith</h3>
                <p className="user-handle">@janesmith</p>
              </div>
            </div>
            <div className="card-body">
              <p className="post-text">Excited to share our new product! #innovation</p>
              <img src={postImage1} alt="Post Content" className="post-image" />
            </div>
            <div className="card-footer">
              <button className="footer-button">
                <FaComment className="footer-icon" /> 8
              </button>
              <button className="footer-button">
                <FaRetweet className="footer-icon" /> 16
              </button>
              <button className="footer-button">
                <FaHeart className="footer-icon" /> 32
              </button>
              <button className="footer-button">
                <FaShare className="footer-icon" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cards;
