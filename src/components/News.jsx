import React, { useState, useEffect } from "react";
import axios from "axios";

const SportsNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const apiKey = "0c3ef78d2481450f805528654d7028fe";
  const endpoint = `https://newsapi.org/v2/everything?q=sports&apiKey=${apiKey}`;

  useEffect(() => {
    const fetchSportsNews = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await axios.get(endpoint);
        setNews(response.data.articles);
      } catch (err) {
        setError("Failed to fetch sports news");
      } finally {
        setLoading(false);
      }
    };

    fetchSportsNews();
  }, []);

  const saveArticle = (article) => {
    const savedArticles = JSON.parse(localStorage.getItem("savedNews")) || [];
    if (!savedArticles.some((a) => a.url === article.url)) {
      savedArticles.push(article);
      localStorage.setItem("savedNews", JSON.stringify(savedArticles));
    }
  };

  return (
    <div className="sports-news">
      <h1>Latest Sports News</h1>

      {loading && <p>Loading news...</p>}
      {error && <p>{error}</p>}

      <div>
        {news.length > 0 ? (
          <ul>
            {news.map((article, index) => (
              <li key={index}>
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer" className="read-more">
                  Read more
                </a>
                <button onClick={() => saveArticle(article)} className="save-btn">
                  Save
                </button>
                <hr />
              </li>
            ))}
          </ul>
        ) : (
          <p>No news available</p>
        )}
      </div>
    </div>
  );
};

export default SportsNews;
