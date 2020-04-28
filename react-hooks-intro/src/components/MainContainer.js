import React from 'react'
import Car from './Car.js'
import SideBar from './SideBar.js'

class MainContainer extends React.Component {
  render() {
    return (
      <div className="MainContainer">
        <SideBar cars={this.props.cars} handleCarLinkClick={this.props.handleCarLinkClick}/>
        <Car car={this.props.cars.find(car => car.id === this.props.carId)}/>
      </div>
    )
  }
}

export default MainContainer
