import React, { useEffect, useState } from 'react';

const SportsStoresMap = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    // Get current location using Geolocation API
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ lat: latitude, lng: longitude });
      });
    }
  }, []);

  return (
    <div>
      <h2>Sports Stores Near You</h2>
      {location ? (
        <iframe
          width="100%"
          height="500px"
          frameBorder="0"
          style={{ border: 0 }}
          src={`https://www.openstreetmap.org/export/embed.html?bbox=${location.lng - 0.05}%2C${location.lat - 0.05}%2C${location.lng + 0.05}%2C${location.lat + 0.05}&layer=mapnik`}
          allowFullScreen
        ></iframe>
      ) : (
        <p>Loading map...</p>
      )}
    </div>
  );
};

export default SportsStoresMap;
