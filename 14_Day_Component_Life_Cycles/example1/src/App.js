// src/App.js
// Recommended for most of the cases
import React, {Component} from 'react'

class App extends Component {
    constructor(props) {
      super(props)
      console.log('I am  the constructor and  I will be the first to run.')
      this.state = {
        firstName: 'John',
        data: [],
      }
    }
  
    componentDidMount() {
      console.log('I am componentDidMount and I will be last to run.')
      const API_URL = 'https://anatole-sot.xyz/projets/gibli/api/'
      fetch(API_URL)
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          this.setState({
            data,
          })
        })
        .catch((error) => {
          console.log(error)
        })
    }
  
    render() {
      return (
        <div className='App'>
          <h1>React Component Life Cycle</h1>
          <h1>Calling API</h1>
          <div>
            <p>There are {this.state.data.length} recipes in the api</p>
            <div className='countries-wrapper'>
              {this.state.data.map((recipe) => (
                <div>
                    <h1>{recipe.Title}</h1>
                    <p>Temps: {recipe.Temps}</p>
                    <p>Nb de personnes: {recipe.personnes}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    }
  }


export default App