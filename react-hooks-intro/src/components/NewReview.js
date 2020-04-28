import React, { Component } from 'react';

class NewReview extends Component {

  state = {
    rating: "5",
    content: ""
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.createReview(this.state)
      .then(response => !response.error && this.resetForm())
  }

  resetForm = () => {
    this.setState({
      rating: "5",
      content: ""
    })
  }

  render() {
    return (
      <div className="NewReview">
        <h4>New Review</h4>
        <form onSubmit={this.handleSubmit}>
          <select name="rating" onChange={this.handleChange} value={this.state.rating}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select><br/>
          <textarea
            onChange={this.handleChange}
            placeholder="Review Content"
            value={this.state.content}
            name="content"
          /><br/>
          <input type="submit" value="Add Review"/>
        </form>
      </div>
    );
  }

}

export default NewReview;
