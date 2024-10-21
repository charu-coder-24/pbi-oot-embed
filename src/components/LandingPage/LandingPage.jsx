// LandingPage.js
import React from 'react';
import './LandingPage.css'; // Landing Page styles
import Tiles from './Tiles'; // Import the Tiles component
import BuissnessLogo from '../../assets/360.png';
import BackgroundVideo from '../../assets/bg-vedio.mp4'; // Your video file

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Sidebar */}
      <aside className="sidebar">
        {/* Background Video */}
       

        {/* Logo and Text */}
        <div className="logo">
          <img src={BuissnessLogo} alt="Logo" />
        </div>
        <h1>Business Insight 360</h1>
      </aside>

      {/* Main Content */}
      <video className="background-video" autoPlay loop muted>
          <source src={BackgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      <main className="main-content">

          <Tiles /> {/* Render the animated tiles */}
      </main>
    </div>
  );
};

export default LandingPage;
