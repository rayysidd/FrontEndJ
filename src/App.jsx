import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import UserProfile from "./components/UserProfile";
import News from "./components/News";
import YouTubeSection from "./components/YoutubeTutorials";
import HeroSection from "./components/HeroSection"; // Import HeroSection
import "./App.css";

const App = () => (
  <Router>
    <div className="app">
      <Header />
      {/* HeroSection added here */}
      <HeroSection />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/news" element={<News />} />
        <Route path="/yt" element={<YouTubeSection />} />
      </Routes>
    </div>
  </Router>
);

export default App;