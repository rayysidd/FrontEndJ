import React from "react";
import HeroSection from "./HeroSection";
import Section from "./Section";

const HomePage = () => (
  <div className="homepage">
    <HeroSection />
    <Section title="Sports News" className="sports-news" backgroundImage="https://imgs.search.brave.com/YQW8YRmYGfNyrajMjnG1nvtw__RGJ33dfCTQXQYFL84/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YWxqYXplZXJhLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/NC8wNi9BUDI0MTgx/Njg4NjY2MjMzLTE3/MTk2OTY5MDcuanBn/P3Jlc2l6ZT03NzAs/NTEzJnF1YWxpdHk9/ODA" />
    <Section title="Tutorials" className="tutorials" backgroundImage="https://imgs.search.brave.com/6XeG_Qy-Vsb-c2yAbNIu05y2be-fzDSAt-nLUcw_bMo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTEz/NjUyMzA0MS9waG90/by9ib3hpbmctZ2xv/dmVzLWhhbmdpbmcu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PWpXc3AzN1FwVlZH/bGVjRldlbnREZGct/Q2hwTkwyek1jczhW/UTY2N3RXdEU9" />
    <Section title="Competitions" className="competitions" backgroundImage="https://imgs.search.brave.com/GnZih6pkrHX9sa5wzE8bKp9vcDom9mztfWZwTfIzRnU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA5LzE3LzMxLzY5/LzM2MF9GXzkxNzMx/Njk2M193NnJ6SUJy/RHlvWURxV3RVeGx1/SmpRN0ZGazg5SEM5/VC5qcGc" />
  </div>
);

export default HomePage;
