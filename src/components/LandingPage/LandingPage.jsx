// LandingPage.js
import React from 'react';
import './LandingPage.css'; // Landing Page styles
import Tiles from './Tiles'; // Import the Tiles component
import BuissnessLogo from '../../assets/360.png';
import BackgroundVideo from '../../assets/bg-video.mp4'; // Your video file

const LandingPage = () => {
  return (
    <div className="landing-page">

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
