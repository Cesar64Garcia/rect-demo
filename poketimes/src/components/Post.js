import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deletePost} from '../actions/postActions';

class Post extends Component{
    handleClick = (e) => {
        this.props.deletePost(this.props.post.id)
        this.props.history.push('./')
    }

    render(){
        return this.props.post ? (
            <div className="container post">
                <h4 className="center">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <div className="btn grey" onClick={this.handleClick}>
                    Delete Post
                </div>
            </div> 
        ) : (
            <div className="container post">
                Post not found...
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    return {
        post: state.posts.find(post => post.id === id)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => {
            dispatch(deletePost(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)