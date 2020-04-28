import React, { Component } from 'react';

class NewCar extends Component {

  state = {
    year: "",
    make: "",
    model: "",
    miles: "",
    price: "",
    used: true
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value})
  }

  resetForm = () => {
    this.setState({
      year: "",
      make: "",
      model: "",
      miles: "",
      price: "",
      used: true
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.createCar(this.state)
      .then(response => {
        if (!response.error) {
          this.resetForm()
        }
      })
  }

  render() {
    return (
      <div className="NewCar">
        <h4>New Review</h4>
        <form onSubmit={this.handleSubmit}>
          <input
            name="year"
            placeholder="year"
            onChange={this.handleChange}
            value={this.state.year}
          /><br/>
          <input
            name="make"
            placeholder="make"
            onChange={this.handleChange}
            value={this.state.make}
          /><br/>
          <input
            name="model"
            placeholder="model"
            onChange={this.handleChange}
            value={this.state.model}
          /><br/>
          <input
            name="miles"
            placeholder="miles"
            onChange={this.handleChange}
            value={this.state.miles}
          /><br/>
          <input
            name="price"
            placeholder="price"
            onChange={this.handleChange}
            value={this.state.price}
          /><br/>
          <select name="used" value={this.state.used}>
            <option value={true}>Used</option>
            <option value={false}>New</option>
          </select><br/>
          <input type="submit" value="Add Car"/>
        </form>
      </div>
    );
  }

}

export default NewCar;
