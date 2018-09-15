import React, {Component} from 'react';

class AddToDo extends Component{
    state = {
        content: ''
    }

    handleOnChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addToDo(this.state);
        this.setState({
            content: ''
        })
    }
    
    render(){
        return (
            <div>
                <form action="" onSubmit={this.handleSubmit}>
                    <label htmlFor="content">Add new To Do:</label>
                    <input type="text" name="content" id="content" onChange={this.handleOnChange} value={this.state.content}/>
                </form>
            </div>
        )
    }
}

export default AddToDo