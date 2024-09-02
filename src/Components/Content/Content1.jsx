import React from 'react';
import Content from './Content.jsx'

const App = () => {
  return (
    <div>
      <Content 
        title="My First Content"
        description="This is the first piece of content."
        photoUrl="https://via.placeholder.com/800x450"
        videoUrl="your-video-file.mp4"
      />
      <Content 
        title="My Second Content"
        description="This is the second piece of content."
        photoUrl="https://via.placeholder.com/800x450"
        videoUrl="another-video-file.mp4"
      />
    </div>
  );
}

export default App;
