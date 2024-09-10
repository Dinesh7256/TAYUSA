


import React, { useState } from 'react';
import './Feedstyle.css';
import { Link } from 'react-router-dom'; 
import thumbnail1 from '../../assets/java.png';
import thumbnail2 from '../../assets/webdevelopment.jpg';
import thumbnail3 from '../../assets/python.png';
import thumbnail4 from '../../assets/data1.jpg';
import thumbnail5 from '../../assets/c.jpg';
import thumbnail6 from '../../assets/c12.jpg';
import thumbnail7 from '../../assets/react.jpg';
import thumbnail8 from '../../assets/cplus.jpg';
const Feed = () => {
  const [activeTab, setActiveTab] = useState('ForYou');
  const videoDataForYou = [
    { id: 4521, thumbnail: thumbnail1, title: "Java Development courses for beginners", channel: "InnovateX", views: "15k views", time: "2 days ago" },
    { id: 2321, thumbnail: thumbnail2, title: "Web Development couses for tech enthusiasts", channel: "InnovateX", views: "15k views", time: "2 days ago" },
    { id: 3, thumbnail: thumbnail5, title: "Programming using C language ", channel: "InnovateX", views: "15k views", time: "2 days ago" },
    { id: 4, thumbnail: thumbnail6, title: "Basics of C# for beginners", channel: "InnovateX", views: "15k views", time: "2 days ago" },
    // ... add more for "For You" videos
  ];
  const videoDataFollowing = [
    { id: 1, thumbnail: thumbnail3, title: "Master PYTHON in no time!", channel: "TechSavvy", views: "20k views", time: "1 day ago" },
    { id: 2, thumbnail: thumbnail4, title: "DSA Basics for beginners", channel: "CodeMaster", views: "30k views", time: "3 days ago" },
    { id: 3, thumbnail: thumbnail7, title: "Become a REACT expert !", channel: "CodeMaster", views: "30k views", time: "3 days ago" },
    { id: 4, thumbnail: thumbnail8, title: "Learning C++ from scratch ", channel: "CodeMaster", views: "30k views", time: "3 days ago" },
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
