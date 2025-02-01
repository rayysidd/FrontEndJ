import React from "react";
import Section from "./Section";

const HomePage = () => (
  <div className="homepage">
    <Section
      title="Sports News"
      className="sports-news"
      backgroundImage="https://imgs.search.brave.com/QUO5qrEJZWqKz0v3j3jC_f5kY6FICBKnFx1JYH9BDxg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L1F1/YXZranJOalhaU1h4/NGdnS0VXVTctODEw/LTgwLmpwZw"
      linkTo="/news"  // Link to News page
    />
    <Section
      title="Tutorials"
      className="tutorials"
      backgroundImage="https://thesportsschool.com/wp-content/uploads/2022/03/sports-coach-shutterstock_380566771-red-mango-20180511115815916.jpg"
      linkTo="/yt"  // Link to YouTube Tutorials
    />
    <Section
      title="Bookings"
      className="bookings"
      backgroundImage="https://5.imimg.com/data5/SELLER/Default/2023/10/350327019/NU/WB/TZ/38215148/7-a-side-football-turf.jpg"
      linkTo="/bookings"  // Updated to link to the Competitions page
    />
  </div>
);

export default HomePage;
