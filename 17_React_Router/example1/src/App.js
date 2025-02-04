// src/App.js
// Recommended for most of the cases
import React, { Component } from 'react'
import {
    BrowserRouter,
    Route,
    Routes,
    NavLink,
} from 'react-router-dom'

// Home component
const Home = (props) => <h1>Welcome Home</h1>
// About component
const About = (props) => <h1>About Us</h1>
// Contact component
const Contact = (props) => <h1>Contact us</h1>
// Challenge component
const Challenges = (props) => (
    <div>
        <h1>30 Days Of React Challenge</h1>
    </div>
)

const NotFound = (props) => <h1>The page your looking for not found</h1>

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className='App'>
                    <ul>
                        <li>
                            <NavLink to='/'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/about'>About</NavLink>
                        </li>
                        <li>
                            <NavLink to='/contact'>Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to='/challenges'>Challenges</NavLink>
                        </li>
                    </ul>

                    <Routes>
                        <Route path='/about' element={<About />} />
                        <Route path='/contact' element={<Contact />} />
                        <Route path='/challenges' element={<Challenges />} />
                        <Route path='/' element={<Home />} />
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </div>
            </BrowserRouter>
        )
    }
}


export default App