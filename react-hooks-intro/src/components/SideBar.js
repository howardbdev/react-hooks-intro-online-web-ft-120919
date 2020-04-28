import React from 'react';

const SideBar = ({cars, handleCarLinkClick, newCarOrReviewClick}) => (
  <div className="SideBar">
    <button className="main-link" onClick={()=>newCarOrReviewClick("newCar")}>Dealer: Add New Car</button>
    <button className="main-link" onClick={()=>newCarOrReviewClick("newReview")}>Customer: Add a Review</button>
    <h4>Cars Inventory </h4>
    {cars.map(car => <a key={car.id} onClick={() => handleCarLinkClick(car.id)}>{car.year} {car.make} {car.model}</a>)}
  </div>
);

export default SideBar;
