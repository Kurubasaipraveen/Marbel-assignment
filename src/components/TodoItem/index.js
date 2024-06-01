import {Component} from 'react'
import './index.css'

class TodoItem extends Component {
  state = {
    editing: false,
    updatedTitle: '',
    updateddateofbirth: '',
    updatedemail: '',
    updatedcontact: '',
  }

  handleEdit = () => {
    const {todoDetails} = this.props
    this.setState({
      editing: true,
      updatedTitle: todoDetails.title,
      updateddateofbirth: todoDetails.dateofbirth,
      updatedemail: todoDetails.email,
      updatedcontact: todoDetails.contact,
    })
  }

  handleSave = () => {
    // const {todoDetails} = this.props
    // const {updatedTitle} = this.state
    this.setState({editing: false})
    // Call a function to save updated title (not implemented in this code)
  }

  handleChange = e => {
    this.setState({
      updatedTitle: e.target.value,
    })
  }
  
  render() {
    const {todoDetails, deleteTodo, toggleComplete} = this.props
    const {
      editing,
      updatedTitle,
      updateddateofbirth,
      updatedemail,
      updatedcontact,
    } = this.state
    return (
      <div className="items">
        <li
          className={
            todoDetails.completed ? 'todo-item completed' : 'todo-item'
          }
        >
          {editing ? (
            <>
              <input
                type="text"
                value={updatedTitle}
                onChange={this.handleChange}
              />
              <input
                type="text"
                value={updateddateofbirth}
                onChange={this.handleChange1}
              />
              <input
                type="text"
                value={updatedemail}
                onChange={this.handleChange2}
              />
              <input
                type="text"
                value={updatedcontact}
                onChange={this.handleChange3}
              />
              <button onClick={this.handleSave} type="button">
                Save
              </button>
            </>
          ) : (
            <>
              
              <div className="colum">
                <p className="title">{todoDetails.title}</p>
                <p className="title">{todoDetails.dateofbirth}</p>
                <p className="title">{todoDetails.email}</p>
                <p className="title">{todoDetails.contact}</p>
              </div>
              <button onClick={this.handleEdit} type="button" className="edit">
                Edit
              </button>
              <button
                onClick={() => deleteTodo(todoDetails.id)}
                type="button"
                className="delete"
              >
                Delete
              </button>
            </>
          )}
        </li>
      </div>
    )
  }
}

export default TodoItem
