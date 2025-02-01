import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../components/BookingSystem.css';

const BookingSystem = () => {
    const [bookings, setBookings] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        date: '',
        time: '',
        venue: ''
    });

    useEffect(() => {
        const storedBookings = JSON.parse(localStorage.getItem('bookings')) || [];
        setBookings(storedBookings);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!formData.name || !formData.date || !formData.time || !formData.venue) {
            alert('Please fill in all fields.');
            return;
        }

        const newBooking = { ...formData, id: Date.now() };
        const updatedBookings = [...bookings, newBooking];

        setBookings(updatedBookings);
        localStorage.setItem('bookings', JSON.stringify(updatedBookings));
        
        setFormData({ name: '', date: '', time: '', venue: '' });
    };

    const handleDelete = (id) => {
        const updatedBookings = bookings.filter(booking => booking.id !== id);
        setBookings(updatedBookings);
        localStorage.setItem('bookings', JSON.stringify(updatedBookings));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    return (
        <motion.div 
            className="booking-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="booking-form-wrapper">
                <motion.h2 
                    className="form-title"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                >
                    Book a Turf/Ground/Court
                </motion.h2>

                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="input-field"
                            placeholder="Enter your name"
                        />
                    </div>

                    <div className="input-group">
                        <label>Date</label>
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="input-field"
                        />
                    </div>

                    <div className="input-group">
                        <label>Time</label>
                        <input
                            type="time"
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            className="input-field"
                        />
                    </div>

                    <div className="input-group">
                        <label>Venue</label>
                        <input
                            type="text"
                            name="venue"
                            value={formData.venue}
                            onChange={handleChange}
                            className="input-field"
                            placeholder="Enter venue name"
                        />
                    </div>

                    <motion.button 
                        type="submit" 
                        className="submit-button"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Book Now
                    </motion.button>
                </form>

                <div className="booking-list">
                    <h3 className="form-title">Your Bookings</h3>
                    {bookings.length > 0 ? (
                        bookings.map(booking => (
                            <motion.div 
                                key={booking.id} 
                                className="booking-item"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                <div>
                                    <p><strong>Name:</strong> {booking.name}</p>
                                    <p><strong>Date:</strong> {booking.date}</p>
                                    <p><strong>Time:</strong> {booking.time}</p>
                                    <p><strong>Venue:</strong> {booking.venue}</p>
                                </div>
                                <button 
                                    className="delete-button"
                                    onClick={() => handleDelete(booking.id)}
                                >
                                    Cancel
                                </button>
                            </motion.div>
                        ))
                    ) : (
                        <p>No bookings yet.</p>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default BookingSystem;