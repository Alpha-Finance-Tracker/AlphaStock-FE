import React, { useState, useContext } from 'react';
import back_vid from '/src/assets/back_vid.mp4'; // Path to your video file
import '/src/index.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <video autoPlay muted loop className="background-video">
        <source src={back_vid} type="video/mp4" />
      </video>
      <div className="hero-section">
        <div className="hero-content">
          <h2>Our goal is to find outstanding business, buy at the right price</h2>
          <h2>and hold for the long run!</h2>
          <a href="#features" className="cta-button">Learn More</a>
        </div>
      </div>

    </div>
  );
};

export default HomePage;

// Remember, our goal is to find outstanding business, 
// buy at the right price and hold for the long run. 