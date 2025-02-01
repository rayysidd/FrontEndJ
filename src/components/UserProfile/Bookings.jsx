import React, { useState } from "react";

const Bookings = () => {
  const [bookings, setBookings] = useState([
    { id: 1, venue: "Andheri Turf", date: "2025-02-10", time: "5:00 PM" },
    { id: 2, venue: "Bandra Court", date: "2025-02-12", time: "6:00 PM" }
  ]);

  return (
    <div className="bookings">
      <h3>Your Bookings</h3>
      <ul>
        {bookings.map((booking) => (
          <li key={booking.id}>
            {booking.venue} - {booking.date} at {booking.time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Bookings;
