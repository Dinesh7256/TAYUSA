import React from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video2.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'

const PlayVideo = () => {
  return (
    <div className='play-video'>
      <video src={video1} controls autoPlay muted></video>
      <h3>Best Youtube channel To learn Web Development</h3>
      <div className="play-video-info">
        <p>1525 views &bull; 2 days ago</p>
        <div>
            <span><img src={like} alt=""/>125</span>
            <span><img src={dislike} alt=""/>2</span>
            <span><img src={share} alt=""/>Share</span>
            <span><img src={save} alt=""/>Save</span>
        </div>
      </div>
      <hr/>
      <div className="publisher">
        <img src={jack} alt=""/>
        <div>
            <p>InnovoteX</p>
            <span>1K Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>Channel that makes learning easy</p>
        <p>Subscribe InnovoteX to watch more Tutorials on web development</p>
        <hr/>
        <h4>130 comments</h4>
        <div className="comment">
          <img src={user_profile} alt=""/>
          <div>
            <h3>Vardhan raj<span>1 day ago</span></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus aut veritatis, eligendi aliquid enim neque provident error. Expedita incidunt cumque esse? Totam nemo quia tempore illo, dolorem tenetur hic eum!</p>
            <div className="comment-action">
              <img src={like} alt=""/>
              <span>244</span>
              <img src={dislike} alt=""/>
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt=""/>
          <div>
            <h3>varshini<span>1 day ago</span></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus aut veritatis, eligendi aliquid enim neque provident error. Expedita incidunt cumque esse? Totam nemo quia tempore illo, dolorem tenetur hic eum!</p>
            <div className="comment-action">
              <img src={like} alt=""/>
              <span>244</span>
              <img src={dislike} alt=""/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlayVideo
