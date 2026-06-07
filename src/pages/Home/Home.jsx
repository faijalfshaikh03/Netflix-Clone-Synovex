import React from 'react'
import "./Home.css"
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from "../../assets/hero_banner.jpg"
import hero_title from "../../assets/hero_title.png"


const Home = () => {
  return (
    <div className='home'>
        <Navbar></Navbar>
        <div className="hero">
            <img className='hero_banner' src={hero_banner} alt="Hero Banner" />
            <div className="hero-caption">
                <img src={hero_title} alt="Hero Title" />
                <p>Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy.</p>
            </div>
        </div>
    </div>
  )
}

export default Home