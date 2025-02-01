import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/login';
import HomePage from './components/HomePage';
import BookingSystem from './components/BookingSystem'; // Ensure this is imported
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import News from "./components/News";
import YouTubeSection from "./components/YoutubeTutorials";
import HeroSection from "./components/HeroSection"; 

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('currentUser');
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <HeroSection />
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Homepage" element={<HomePage />} />
          {/* Protect private routes */}
          <Route 
            path="/profile" 
            element={<ProtectedRoute><UserProfile /></ProtectedRoute>} 
          />
          <Route 
            path="/news" 
            element={<ProtectedRoute><News /></ProtectedRoute>} 
          />
          <Route 
            path="/yt" 
            element={<ProtectedRoute><YouTubeSection /></ProtectedRoute>} 
          />
          
          {/* ✅ Add missing Booking Route */}
          <Route 
            path="/booking" 
            element={<ProtectedRoute><BookingSystem /></ProtectedRoute>} 
          />

          {/* Redirect unknown routes to HomePage */}
          <Route path="*" element={<Navigate to="/Homepage" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;