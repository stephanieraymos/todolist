import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  getStyle = () => {
    return {
      /*Ternary operator (? means if and : means else)*/
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
          {title}
          <button onClick={this.props.delTodo.bind(this,id)} className="btnStyle">x</button>
          </p>
      </div>
    )
  }
}

// PropTypes (Named whatever the name of the class is)
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}


export default TodoItem



