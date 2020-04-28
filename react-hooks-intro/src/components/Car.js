import React from 'react'

const Car = ({ car }) => {
  return (
    car
      ?  <div className="Car">
          <h3>{car.make} {car.model}</h3>
          <p>Year: {car.year}</p>
          <p>Miles: {car.miles}</p>
          <p>Price: ${car.price}</p>
          <p>{car.used ? "Used" : "New!"}</p>
        </div>
      : <div className="Car">
          <h6>👈 Please choose a car from the list</h6>
        </div>
  )
}

export default Car
