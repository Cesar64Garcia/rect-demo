import React, {Component} from 'react';
import axios from 'axios'

class Post extends Component{
    state = {
        post: null
    }
    componentDidMount(){
        let id = this.props.match.params.post_id;
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
        .then(res => {
            this.setState({
                post: res.data
            })
        });
    }
    render(){
        return this.state.post ? (
            <div className="container post">
                <h4 className="center">{this.state.post.title}</h4>
                <p>{this.state.post.body}</p>
            </div> 
        ) : (
            <div className="container post">
                Post not found...
            </div>
        )
    }
}

export default Post