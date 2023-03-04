// src/App.js
// Recommended for most of the cases
import React, {Component} from 'react'
import Header from './components/Header'
import Main from './components/Main'


class App extends Component {
    render() {
      return (
        <div className='App'>
         <Header />
         <Main />
        </div>
      )
    }
  }
  


export default App