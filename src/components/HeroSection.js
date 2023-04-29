import React from 'react';
import '../App.css';
import Services from './pages/Services';
import './HeroSection.css';
import video from './video-2.mov'
import {Routes, Route, useNavigate} from 'react-router-dom';


function HeroSection() {
  const navigate = useNavigate();

  const navigateToServices = () => {
   
    navigate('/services');
  };
  

  return (
<div className='hero-containers'>

<video src={video} autoPlay loop muted  />
      <h1>Recycling E-waste and Li-batteries</h1>
      <p>Recycling, packaging, businesses are changing all of those things <br></br> because that’s what consumers want.</p>
      <div className='hero-btn'>
      
        <button className='A' onClick={navigateToServices}>
          Know about us
        </button>
      
        <a href="https://youtu.be/pTE4VJ3Fr2U" target="_blank" rel="noopener noreferrer">
        <button  className='A'>
          Detail Processing <i className='far fa-play-circle' />
        </button>
        </a>
        <Routes>
          <Route path="/services" element={<Services/>} />
        </Routes>
      </div>
    </div>
  );
}

export default HeroSection;