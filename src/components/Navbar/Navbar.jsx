import React from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.png"
import search from "../../assets/search_icon.svg"
import bellicon from "../../assets/bell_icon.svg"
import profile_img from "../../assets/profile_img.png"
import dropdown from "../../assets/caret_icon.svg"



const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar-left'>
            <img src={logo} alt="Netflix Logo" className='navbar-logo' />
            <ul>
                <li>Home</li>
                <li>TV Shows</li>
                <li>Movies</li>
                <li>New & Popular</li>
                <li>My List</li>
                <li>Browse by Languages</li>
            </ul>
        </div>
        <div className='navbar-right'>
            <img src={search} alt="Searh Icon" />
            <p>Children</p>
            <img src={bellicon} alt="Bell Icon" />
            <div className='navbar-profile'>
                <img src={profile_img} alt="profile" className='profile' />
                <img src={dropdown} alt="dropdown_icon" />
                <div className="dropdown">
                    <p>Sign Out of Netflix</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar