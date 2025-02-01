import React, { useState, useEffect } from "react";
import "./UserProfile.css"
const UserProfile = () => {
  const [savedNews, setSavedNews] = useState([]);
  const [savedVideos, setSavedVideos] = useState([]);
  const [subreddit, setSubreddit] = useState("");
  const [subreddits, setSubreddits] = useState([]);
  const [socialLinks] = useState([
    { name: "Twitter", url: "https://twitter.com" },
    { name: "Instagram", url: "https://instagram.com" },
    { name: "Facebook", url: "https://facebook.com" },
  ]);

  // Load saved data from localStorage on mount
  useEffect(() => {
    try {
      setSavedNews(JSON.parse(localStorage.getItem("savedNews")) || []);
      setSavedVideos(JSON.parse(localStorage.getItem("favorites")) || []);
      setSubreddits(JSON.parse(localStorage.getItem("subreddits")) || []);
    } catch (error) {
      console.error("Error loading data from localStorage:", error);
    }
  }, []);

  // Add subreddit to list and save to localStorage
  const addSubreddit = () => {
    if (subreddit.trim() && !subreddits.includes(subreddit)) {
      const updatedSubreddits = [...subreddits, subreddit];
      setSubreddits(updatedSubreddits);
      localStorage.setItem("subreddits", JSON.stringify(updatedSubreddits));
      setSubreddit(""); // Clear input
    } else {
      alert("Please enter a valid subreddit name.");
    }
  };

  // Remove subreddit from list
  const removeSubreddit = (sub) => {
    const updatedSubreddits = subreddits.filter((s) => s !== sub);
    setSubreddits(updatedSubreddits);
    localStorage.setItem("subreddits", JSON.stringify(updatedSubreddits));
  };

  return (
    <div className="profile">
      <h2>User Profile</h2>

      {/* Saved News Articles */}
      <h3>Saved News Articles</h3>
      {savedNews.length > 0 ? (
        <ul>
          {savedNews.map((article, index) => (
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

      {/* Saved YouTube Tutorials */}
      <h3>Saved YouTube Tutorials</h3>
      {savedVideos.length > 0 ? (
        <ul>
          {savedVideos.map((id) => (
            <li key={id}>
              <a href={`https://www.youtube.com/watch?v=${id}`} target="_blank" rel="noopener noreferrer">
                Watch Video
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No saved videos.</p>
      )}

      {/* Social Media Links */}
      <h3>Social Media</h3>
      <ul>
        {socialLinks.map((link, index) => (
          <li key={index}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Custom Subreddit Input & List */}
      <h3>Favorite Subreddits</h3>
      <input
        type="text"
        placeholder="Enter subreddit name"
        value={subreddit}
        onChange={(e) => setSubreddit(e.target.value)}
      />
      <button onClick={addSubreddit}>Add</button>

      {subreddits.length > 0 ? (
        <ul>
          {subreddits.map((sub, index) => (
            <li key={index}>
              <a href={`https://www.reddit.com/r/${sub}`} target="_blank" rel="noopener noreferrer">
                r/{sub}
              </a>
              <button onClick={() => removeSubreddit(sub)}>Remove</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No subreddits added.</p>
      )}
    </div>
  );
};

export default UserProfile;
