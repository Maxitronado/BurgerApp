import React from 'react';
import './App.css'; // assuming you have some generic styles here

const ContactInfo = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="content">
                    <h4>About Us</h4>
                    <p>
                        This is a brief description of the restaurant. We serve the best burgers in town.
                    </p>
                </div>
                <div className="content">
                    <h4>Contact Us</h4>
                    <p>Email: test@restaurant.com</p>
                    <p>Phone: +1 123 456 7890</p>
                </div>
            </div>
        </footer>
    );
};

export default ContactInfo;
