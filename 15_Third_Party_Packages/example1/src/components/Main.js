import React,{Component} from "react";
import axios from 'axios'

class Main extends Component {
    state = {
        data: []
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            const data = response.data;
            this.setState({data});
            console.log(data);
        })
        .catch((error) => {
            console.log(error);
        })
    }
    render() {
        return (
            <div>
                <h1>Posts</h1>
                <ul>
                    {this.state.data.map((post) => {
                        return <li key={post.id}>{post.title}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default Main;