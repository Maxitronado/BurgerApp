import React from 'react';

function ContactInfo(props) {
    return (
      <div>
        <h2>Contact Us</h2>
        <p>Email: {props.email}</p>
        <p>Phone: {props.phone}</p>
      </div>
    );
  }
  
  
  export default ContactInfo;
