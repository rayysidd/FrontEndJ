import React, { useState, useEffect } from "react";

const SavedNews = () => {
  const [savedArticles, setSavedArticles] = useState([]);

  useEffect(() => {
    const storedArticles = JSON.parse(localStorage.getItem("savedNews")) || [];
    setSavedArticles(storedArticles);
  }, []);

  return (
    <div className="saved-news">
      <h3>Saved News Articles</h3>
      {savedArticles.length > 0 ? (
        <ul>
          {savedArticles.map((article, index) => (
            <li key={index}>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                {article.title}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No saved news articles.</p>
      )}
    </div>
  );
};

export default SavedNews;