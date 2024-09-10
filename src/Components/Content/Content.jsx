import React, { useState } from 'react';
import './ContentStyle.css';

const Content = () => {
  const [inputText, setInputText] = useState('');
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleTextChange = (e) => {
    setInputText(e.target.value);
  };

  const handlePhotoChange = (e) => {
    setSelectedPhoto(URL.createObjectURL(e.target.files[0]));
  };

  const handleVideoChange = (e) => {
    setSelectedVideo(URL.createObjectURL(e.target.files[0]));
  };

  const handlePost = () => {
    // Handle the logic for posting content
    console.log('Posted:', inputText, selectedPhoto, selectedVideo);
  };

  return (
    <div className="content-container">
      <textarea
        placeholder="Write your content here..."
        value={inputText}
        onChange={handleTextChange}
        className="content-input"
      />
      <div className="content-actions">
        <label className="add-photo-video">
          <span><i class="fa-solid fa-camera"></i></span>
          <input type="file" accept="image/*" onChange={handlePhotoChange} />
        </label>
        <label className="add-photo-video">
          <span><i class="fa-solid fa-video"></i></span>
          <input type="file" accept="video/*" onChange={handleVideoChange} />
        </label>
      </div>
      <button className="post-button" onClick={handlePost}>
        Post
      </button>

      <div className="preview-section">
        {selectedPhoto && <img src={selectedPhoto} alt="Selected" className="preview-image" />}
        {selectedVideo && <video src={selectedVideo} controls className="preview-video" />}
      </div>
    </div>
  );
};

export default Content;
