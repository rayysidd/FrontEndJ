import React from "react";

const HeroSection = () => {
  const backgroundImageUrl = "https://imageio.forbes.com/specials-images/imageserve/644062dc07939ab6491e5605/quidditchpotter-733012/960x0.png?format=png&width=960g"; // Replace with your image URL

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <h2>Welcome to the Ultimate Sports Hub</h2>
      <p>Your one-stop destination for all things sports.</p>
    </section>
  );
};

export default HeroSection;
