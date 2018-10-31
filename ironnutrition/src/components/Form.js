import React, { Component } from 'react'

class Form extends Component {
  state = {
    food: {
      name: '',
      calories: '',
      image: '',
    }
  }
  
  handleValue = event => {
    const {food} = this.state
    food[event.target.name] = event.target.value
    this.setState({food})
  }

  handleSubmit = event => {
    event.preventDefault()
    const {food} = this.state
    this.props.addFood(food)
    this.setState({food:{name: '', calories: '', image: ''}})
  }

  render() {
    const {food} = this.state

    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name</label>
        <input name="name" value={food.name} onChange={this.handleValue} />
        <label>Calories</label>
        <input name="calories" value={food.calories} onChange={this.handleValue} />
        <label>Image</label>
        <input name="image" value={food.image} onChange={this.handleValue} />
        <input type="submit" value="submit" />
      </form>
    )
  }
}

export default Form;