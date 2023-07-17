import React from 'react';
import MenuItem from './MenuItem';

function Menu() {
  return (
    <div className="menu">
      <MenuItem
        image="images\classic.jpg"
        name="Classic Burger"
        description="A timeless favorite for all. This burger boasts a succulent beef patty, fresh, crispy lettuce, and ripe, juicy tomatoes"
      />
      <MenuItem
        image="\images\cheese.png"
        name="Cheese Lover Burger"
        description="For cheese lovers - beef, double cheese, lettuce and and tomato."
      />
      <MenuItem
        image="\images\bacon.png"
        name="Bacon Burger"
        description="A mouth-watering delight for bacon lovers. It features crispy bacon strips, fresh lettuce, and ripe tomatoes."
      />
      <MenuItem
        image="\images\chicken.jpg"
        name="Chicken Burger"
        description="For poultry aficionados. This burger includes a tender grilled chicken breast, crisp lettuce, and juicy tomatoes."
      />
    </div>
  );
}

export default Menu;