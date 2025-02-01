import React, { useState, useEffect } from 'react';
import axios from 'axios';

const YouTubeTutorials = () => {
  const [videos, setVideos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState([]);

  const fetchVideos = async (query) => {
    try {
      const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          part: 'snippet',
          q: `${query} tutorial`, // Automatically add "tutorial" to the search query
          type: 'video',
          maxResults: 5,
          key: 'AIzaSyAL-0n51J_oJo8C7lDwQb05s0BTWKs-TOA',
        },
      });

      setVideos(response.data.items);
    } catch (error) {
      console.error('Error fetching YouTube tutorials:', error);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchVideos(searchQuery);
  };

  const toggleFavorite = (videoId) => {
    const newFavorites = [...favorites];
    if (newFavorites.includes(videoId)) {
      setFavorites(newFavorites.filter((id) => id !== videoId)); // Remove from favorites
    } else {
      setFavorites([...newFavorites, videoId]); // Add to favorites
    }
  };

  useEffect(() => {
    fetchVideos('sports'); // Default search to "sports tutorial"
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites)); // Save favorites to localStorage
  }, [favorites]);

  return (
    <div>
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

      <ul>
        {videos.map((video) => (
          <li key={video.id.videoId}>
            <a
              href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
                style={{ width: '120px', height: '90px', marginRight: '10px' }}
              />
              {video.snippet.title}
            </a>
            <button onClick={() => toggleFavorite(video.id.videoId)}>
              {favorites.includes(video.id.videoId) ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </li>
        ))}
      </ul>

      <h3>Favorites</h3>
      <ul>
        {favorites.length > 0 ? (
          favorites.map((id) => (
            <li key={id}>
              <a href={`https://www.youtube.com/watch?v=${id}`} target="_blank" rel="noopener noreferrer">
                Watch Favorite
              </a>
            </li>
          ))
        ) : (
          <p>No favorite videos yet.</p>
        )}
      </ul>
    </div>
  );
};

export default YouTubeTutorials;
