import React, { Component } from 'react';
import './App.css';
import Todolist from './Todolist';
import AddTodo from './AddTodo';


class App extends Component {

  state = {
      todolist: [
      {  Action: 'Play Ruger', id: 1 },
      {  Action: 'Play carom', id: 2 }
    ]
  };

 deleteTodo = (id) => {
  console.log(id);
  const todolist = this.state.todolist.filter(todo =>{
    return todo.id !== id
  });
  this.setState({
      todolist
  })
 }

 addTodo = (todo) =>{
     todo.id = Math.random();
     let todos = [...this.state.todolist, todo];
     this.setState({
         todolist : todos
     })
 }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">My To-Do App</h1>
        <Todolist todolist={this.state.todolist} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
