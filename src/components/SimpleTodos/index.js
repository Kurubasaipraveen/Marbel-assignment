import {Component} from 'react'
import TodoItem from '../TodoItem'
import './index.css'

class SimpleTodos extends Component {
  state = {
    todosList: [
      {
        id: 1,
        title: 'praveen',
        dateofbirth: '10-12-2003',
        email: 'ksaiparveen10@gmaol.com',
        contact: '8660911386',
        completed: false,
      },
    ],
    newTodoTitle: '',
    newTodoCount: 1,
  }

  handleAddTodo = () => {
    const {
      newTodoTitle,
      newTododateofbirth,
      newTodoEmail,
      newTodoNumber,
      newTodoCount,
    } = this.state
    const newTodos = Array.from({length: newTodoCount}, (_, i) => ({
      id: Date.now() + i,
      title: newTodoTitle,
      dateofbirth: newTododateofbirth,
      email: newTodoEmail,
      contact: newTodoNumber,
      completed: false,
    }))
    this.setState(prevState => ({
      todosList: [...prevState.todosList, ...newTodos],
      newTodoTitle: '',
      newTododateofbirth: '',
      newTodoEmail: '',
      newTodoNumber: '',
      newTodoCount: 1,
    }))
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  deleteTodo = id => {
    const {todosList} = this.state
    const updatedTodoList = todosList.filter(todo => todo.id !== id)
    this.setState({todosList: updatedTodoList})
  }

  toggleComplete = id => {
    const {todosList} = this.state
    const updatedTodoList = todosList.map(todo =>
      todo.id === id ? {...todo, completed: !todo.completed} : todo,
    )
    this.setState({todosList: updatedTodoList})
  }

  render() {
    const {
      todosList,
      newTodoTitle,
      newTododateofbirth,
      newTodoEmail,
      newTodoNumber,
    } = this.state
    return (
      <div className="container">
        <div className="inner-container">
          <div className="add-todo">
            <input
              type="text"
              className="input"
              name="newTodoTitle"
              value={newTodoTitle}
              onChange={this.handleChange}
              placeholder="Enter Name"
            />

            <input
              type="text"
              className="input"
              name="newTododateofbirth"
              value={newTododateofbirth}
              onChange={this.handleChange}
              placeholder="Enter DateOfBirth"
            />
            <input
              type="text"
              className="input"
              name="newTodoEmail"
              value={newTodoEmail}
              onChange={this.handleChange}
              placeholder="Enter Email"
            />
            <input
              type="text"
              className="input"
              name="newTodoNumber"
              value={newTodoNumber}
              onChange={this.handleChange}
              placeholder="Enter Phone Number"
            />
            <button onClick={this.handleAddTodo} type="button" className="add">
              Add
            </button>
          </div>
          <ul className="todos-list">
            {todosList.map(todo => (
              <TodoItem
                key={todo.id}
                todoDetails={todo}
                deleteTodo={this.deleteTodo}
                toggleComplete={this.toggleComplete}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
