// LoadingScreen.js
import React from "react";
import "./LoadingScreen.css"; // CSS for the spinner and layout
import { FaSpinner } from "react-icons/fa"; // Import spinner icon from react-icons

const LoadingScreen = () => (
  <div className="loading-screen">
    <FaSpinner className="spinner-icon"/>
    <div className="content">Please wait while we load the content...</div>
  </div>
);

export default LoadingScreen;
