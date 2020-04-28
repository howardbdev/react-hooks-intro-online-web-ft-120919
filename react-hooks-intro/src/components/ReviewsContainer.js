import React, { Component } from 'react';
import Review from './Review.js'

class ReviewsContainer extends Component {
  state = {
    interval: 0
  }

  componentWillUnmount() {
    this.props.stopInterval()
  }

  render() {
    return (
      <div className="ReviewsContainer">
        <Review review={this.props.review}/>
      </div>
    );
  }

}

export default ReviewsContainer;
