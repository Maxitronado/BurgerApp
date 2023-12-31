import React from 'react';

function MenuItem(props) {
    return (
      <div className="card">
        <img src={props.image} className="card-img-top" alt={props.name} />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.description}</p>
          <button className="btn btn-primary">Order Now</button>
        </div>
      </div>
    );
  }
  
  export default MenuItem;