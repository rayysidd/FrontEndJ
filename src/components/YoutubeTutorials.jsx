import React, { useState, useEffect } from "react";
import axios from "axios";

const YouTubeTutorials = () => {
  const [videos, setVideos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [favorites, setFavorites] = useState([]);

  const fetchVideos = async (query) => {
    try {
      const response = await axios.get("https://www.googleapis.com/youtube/v3/search", {
        params: {
          part: "snippet",
          q: `${query} tutorial`,
          type: "video",
          maxResults: 5,
          key: "AIzaSyAL-0n51J_oJo8C7lDwQb05s0BTWKs-TOA",
        },
      });

      setVideos(response.data.items);
    } catch (error) {
      console.error("Error fetching YouTube tutorials:", error);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchVideos(searchQuery);
  };

  const toggleFavorite = (videoId) => {
    let updatedFavorites = [...favorites];
    if (updatedFavorites.includes(videoId)) {
      updatedFavorites = updatedFavorites.filter((id) => id !== videoId);
    } else {
      updatedFavorites.push(videoId);
    }
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  useEffect(() => {
    fetchVideos("sports");
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  return (
    <div className="youtube-tutorials">
      <h2>Sports Tutorials on YouTube</h2>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search sports tutorials..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <div className="cards-container">
        <h3>Search Results</h3>
        <div className="card-grid">
          {videos.map((video) => (
            <div key={video.id.videoId} className="card">
              <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target="_blank" rel="noopener noreferrer">
                <img
                  src={video.snippet.thumbnails.medium.url}
                  alt={video.snippet.title}
                  className="card-image"
                />
                <div className="card-content">
                  <h4>{video.snippet.title}</h4>
                </div>
              </a>
              <button onClick={() => toggleFavorite(video.id.videoId)} className="favorite-btn">
                {favorites.includes(video.id.videoId) ? "Remove from Favorites" : "Add to Favorites"}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Favorites Section at the bottom */}
      <div className="favorites-container">
        <h3>Favorites</h3>
        <div className="card-grid">
          {favorites.length > 0 ? (
            favorites.map((id) => (
              <div key={id} className="card">
                <a href={`https://www.youtube.com/watch?v=${id}`} target="_blank" rel="noopener noreferrer">
                  <img
                    src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`}
                    alt={`Video ${id}`}
                    className="card-image"
                  />
                  <div className="card-content">
                    <h4>Watch Favorite</h4>
                  </div>
                </a>
              </div>
            ))
          ) : (
            <p>No favorite videos yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default YouTubeTutorials;
