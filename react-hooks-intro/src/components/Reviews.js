import React, { Component } from 'react';
import Review from './Review'

class Reviews extends Component {

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

export default Reviews;
