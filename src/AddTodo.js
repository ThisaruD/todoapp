import React, {Component} from 'react';

class Todo extends Component{

    state = {
content:''
    }
    handleChange = (e) =>{
      this.setState({
          content:e.target.value
      })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        //console.log(this.state);
        this.props.addTodo(this.state);
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add new todos:</label>
                    <input type="text" onChange={this.handleChange}/>
                </form>
            </div>
        )
    }


}
export default Todo;