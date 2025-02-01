import React, { useState, useEffect } from "react";

const SavedTutorials = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  return (
    <div className="saved-tutorials">
      <h3>Saved Tutorials</h3>
      {favorites.length > 0 ? (
        <ul>
          {favorites.map((id) => (
            <li key={id}>
              <a href={`https://www.youtube.com/watch?v=${id}`} target="_blank" rel="noopener noreferrer">
                Watch Favorite
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No favorite videos yet.</p>
      )}
    </div>
  );
};

export default SavedTutorials;
