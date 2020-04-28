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
      dealerReviews: [],
      interval: 0,
      reviewId: 0,
      currentCarId: 0,
      reviewsOn: true
    }
  }

  // when this component mounts, I want to get all the cars data from my backend...
  componentDidMount() {
    fetch("http://localhost:3001/api/v1/cars")
      .then(resp => resp.json())
      .then(carsJSON => {
        this.setState({
          cars: carsJSON
        })
      })

      fetch("http://localhost:3001/api/v1/dealer_reviews")
        .then(resp => resp.json())
        .then(reviews => {
          this.setState({
            dealerReviews: reviews
          })
        })

      this.startInterval()
  }

  startInterval = () => {
    this.state.interval && this.stopInterval() // ensure to kill current interval if there is one before starting another..
     this.setState({
       interval: setInterval(this.setReview, 3000)
     })
  }
  // I did change the name to match what this method is doing -- in the lecture I called it `startInterval` but that doesn't make sense -- I'm starting the interval inside componentDidMount
  setReview = () => {
    // find a review at random
    // update the state with that review
    const review = this.state.dealerReviews[Math.floor(Math.random() * this.state.dealerReviews.length)]
    this.setState({
      reviewId: review ? review.id : 0
    })
  }

  stopInterval = () => clearInterval(this.state.interval)

  handleCarLinkClick = (id) => this.setState({ currentCarId: id })

  handleReviewsButtonClick = () => {
    this.state.reviewsOn ? this.stopInterval() : this.startInterval()
    this.setState({reviewsOn: !this.state.reviewsOn})
  }

  // the render method should be a pure function of props and state
  render() {

    return (

      <div className="App">
        <h1>🚗 React Cars 🚙</h1>
        <MainContainer cars={this.state.cars} carId={this.state.currentCarId} handleCarLinkClick={this.handleCarLinkClick}/>
        <button onClick={this.handleReviewsButtonClick}>{this.state.reviewsOn ? "Hide Reviews" : "Show Reviews Slideshow"}</button>
        {this.state.reviewsOn && <ReviewsContainer
          reviewsOn={this.state.reviewsOn}
          review={this.state.dealerReviews.find(review => review.id === this.state.reviewId)}
          stopInterval={this.stopInterval}
        />}
      </div>

    );

  }
}

export default App;
