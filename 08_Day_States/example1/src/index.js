import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class App extends React.Component {
    state = {
        count: 0
    }
    render() {
        return (
            <div className="App">
                <h1>{this.state.count}</h1>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>Increment</button>
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

