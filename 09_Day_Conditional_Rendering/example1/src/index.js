// index.js
import React from 'react'
import ReactDOM from 'react-dom'

// class based component
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
    }
  }

  componentDidMount() {
    // fake api call
    setTimeout(() => {
      this.setState({
        isLoading: false,
      })
    }, 1500)
  }

  render() {
    return (
      <div>
        {this.state.isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <h1>Welcome ! </h1>
        )}
      </div>
    )
  }
}

const rootElement = ReactDOM.createRoot(document.getElementById('root'))

rootElement.render(<App />)