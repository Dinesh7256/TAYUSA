import React from 'react'
import './Navbarstyle.css'
import menu_icon from '../../assets/menu.png'
import icon from '../../assets/ets.png'
import search_icon from '../../assets/search.png'
import profile_icon from '../../assets/user.png'
import { Link } from 'react-router-dom'
const Navbar = ({setSidebar}) => {
  return (
    <nav className='flex-div'>
        <div className='nav-left flex-div'>
    
           <img className='menu-icon' onClick={()=>setSidebar(prev=>prev===false?true:false)} src={menu_icon} alt=""/> 
           <img className='logo' src={icon} alt=""/> 
        </div>

        <div className="nav-middle flex-div">
        <div className="search-box flex-div">
        <input type="text" placeholder='search'/>
        <img src={search_icon} alt=""/>
        </div>
        </div>

        <div className="nav-right flex-div">
            <Link to={'/login'}><img src={profile_icon}  className="user-icon" alt="" /></Link>
        </div>

    </nav>
  )
}

export default Navbar
