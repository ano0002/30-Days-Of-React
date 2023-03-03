// src/App.js
// Recommended for most of the cases
import React, {Component} from 'react'

class App extends Component {
    state = {
        pos : {
            x : 0,
            y : 0
        }
    }
  
    move = (e) => {
        this.setState({
            pos : {
                x : Math.floor(Math.random()*window.innerWidth),
                y : Math.floor(Math.random()*window.innerHeight)
            }
        })
    }

    render() {
        return (
            <div>
                <h1 style= {{"top" : this.state.pos.y+"px","left" : this.state.pos.x+"px","position":'absolute'}} onMouseEnter={this.move}>App Component</h1>
            </div>
        )
    }
}


export default App