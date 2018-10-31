import React, { Component } from 'react';
import foods from './foods.json'
import Food from './components/Food'
import Form from './components/Form'

class App extends Component {

  state = {
    foods: foods,
    form: false,
    input: ''
  }
  
  addFood = food => {
    foods.push(food)
    this.setState({foods, form: false})
  }

  openForm = () => {
    this.setState({form: true})
  }

  searchFood = event => {
    this.setState({
      input: event.target.value
    })
  }

  render() {
    const {form, input, value} = this.state
    return (
      <div className="App">
        {form ? <Form addFood={this.addFood}/> : <button onClick={this.openForm}>Add more food</button>}
        <input value={input} type="text" onChange={this.searchFood} />
        <div className="general-box">
          {foods.map((food, index) => {
            return <Food 
            key={index}
            name={food.name}
            image={food.image}
            calories={food.calories}
            />
          })}
        </div>
      </div>
    );
  }
}

export default App;
