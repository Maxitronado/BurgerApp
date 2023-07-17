import React from 'react';
import SocialLinks from './SocialLinks';

function Navbar() {
  return (
    <nav>
      <div className="nav-section">
        <img src="/images/logo.png" alt="Restaurant Logo" className="navbar-logo" />
      </div>
      <div className="nav-section">
        <h1>Max Burgers</h1>
      </div>
      <div className="nav-section">
        <SocialLinks facebook="your_facebook_account" instagram="your_instagram_account" twitter="your_twitter_account" />
      </div>
    </nav>
  );
}

export default Navbar;
