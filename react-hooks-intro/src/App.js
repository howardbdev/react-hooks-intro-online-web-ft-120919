import React from 'react';
import './App.css';
import Review from './components/Review.js'
import SideBar from './components/SideBar.js'
import MainContainer from './components/MainContainer.js'
import ReviewsContainer from './components/ReviewsContainer.js'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      cars: [],
      currentCarId: 0,
      currentView: "cars",
    }
  }

  componentDidMount() {
    this.getCars()
  }

  getCars = () => {
    fetch("http://localhost:3001/api/v1/cars")
      .then(resp => resp.json())
      .then(carsJSON => {
        this.setState({
          cars: carsJSON
        })
      })
  }

  handleCarLinkClick = (id) => this.setState({ currentCarId: id, currentView: "cars" })

  newCarClick = (currentView) => {
    this.setState({
      currentView
    })
  }

  createCar = (carData) => {
    const body = {
      car: carData
    }
    return fetch("http://localhost:3001/api/v1/cars", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(r => r.json())
      .then(newCar => {
        if (newCar.error) {
          alert(newCar.error)
        } else {
          this.setState({
            cars: this.state.cars.concat(newCar)
          })
        }
        return newCar
      })
  }


  // the render method should be a pure function of props and state
  render() {

    return (

      <div className="App">
        <h1>🚗 React Cars 🚙</h1>
        <MainContainer
          currentView={this.state.currentView}
          cars={this.state.cars}
          carId={this.state.currentCarId}
          handleCarLinkClick={this.handleCarLinkClick}
          newCarClick={this.newCarClick}
          createCar={this.createCar}
        />

        <ReviewsContainer />
      </div>

    );

  }
}

export default App;
