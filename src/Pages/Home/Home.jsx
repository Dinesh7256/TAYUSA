import React from 'react'
import './Homestyle.css'
import Sidebar from '../../Components/sidebar/Sidebar'
import Feed from '../../Components/Feed/Feed'

const Home = ({sidebar}) => {
  return (
    <>
      <Sidebar sidebar={sidebar}/>
      <div className={`container ${sidebar?"":'large-container'}`}>
        <Feed/>
      </div>
    </>
  )
}

export default Home
