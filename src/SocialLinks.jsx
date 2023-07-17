import React from 'react';

function SocialLinks(props) {
    return (
      <div className="social-links">
        <a href={`https://www.facebook.com/${props.facebook}`} className="social-link">
          <img src="\images\Facebook-f_Logo-Blue-Logo.wine.svg" alt="Facebook" />
        </a>
        <a href={`https://www.instagram.com/${props.instagram}`} className="social-link">
          <img src="\images\Instagram-Logo.wine.svg" alt="Instagram" />
        </a>
        <a href={`https://www.twitter.com/${props.twitter}`} className="social-link">
          <img src="\images\Twitter-Logo.wine.svg" alt="Twitter" />
        </a>
      </div>
    );
  }
  
  export default SocialLinks;