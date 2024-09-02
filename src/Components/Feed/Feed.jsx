import React, { useState } from 'react';
import './Feedstyle.css';
import { Link } from 'react-router-dom'; 
import thumbnail1 from '../../assets/thumbnail1.png';
import thumbnail2 from '../../assets/thumbnail2.png';
import thumbnail3 from '../../assets/thumbnail3.png';
import thumbnail4 from '../../assets/thumbnail4.png';
import thumbnail5 from '../../assets/thumbnail5.png';
import thumbnail6 from '../../assets/thumbnail6.png';
import thumbnail7 from '../../assets/thumbnail7.png';
import thumbnail8 from '../../assets/thumbnail8.png';

const Feed = () => {
  const [activeTab, setActiveTab] = useState('ForYou');

  const videoDataForYou = [
    { id: 4521, thumbnail: thumbnail1, title: "Best Channel to learn coding that help you to be a webdeveloper", channel: "InnovoteX", views: "15k views", time: "2 days ago" },
    { id: 2, thumbnail: thumbnail2, title: "Best Channel to learn coding that help you to be a webdeveloper", channel: "InnovoteX", views: "15k views", time: "2 days ago" },
    // ... add more for "For You" videos
  ];

  const videoDataFollowing = [
    { id: 1, thumbnail: thumbnail3, title: "Channel to master front-end development", channel: "TechSavvy", views: "20k views", time: "1 day ago" },
    { id: 2, thumbnail: thumbnail4, title: "Become a JavaScript expert in no time", channel: "CodeMaster", views: "30k views", time: "3 days ago" },
    // ... add more for "Following" videos
  ];

  const renderVideos = (videos) => {
    return videos.map(video => (
      <Link to={`video/20/${video.id}`} className="card" key={video.id}>
        <img src={video.thumbnail} alt={video.title} />
        <h2>{video.title}</h2>
        <h3>{video.channel}</h3>
        <p>{video.views} &bull; {video.time}</p>
      </Link>
    ));
  };

  return (
    <div className="feed-container">
      <div className="tabs">
        <button className={activeTab === 'ForYou' ? 'active' : ''} onClick={() => setActiveTab('ForYou')}>For You</button>
        <button className={activeTab === 'Following' ? 'active' : ''} onClick={() => setActiveTab('Following')}>Following</button>
      </div>
      <div className="feed">
        {activeTab === 'ForYou' ? renderVideos(videoDataForYou) : renderVideos(videoDataFollowing)}
      </div>
    </div>
  );
}

export default Feed;
