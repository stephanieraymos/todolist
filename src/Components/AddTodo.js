import React, { Component } from 'react'

export class AddTodo extends Component {
  state = {
    title: ''
  }

  onSubmit = (e) =>{
    //To prevent it from submitting to the actual file
    e.preventDefault();
    this.props.addTodo(this.state.title);
    //To clear field after it's submitted
    this.setState({ title: ''});
  }

  // Setting title to whatever we type into the field
  onChange = (e) => this.setState({ [e.target.name]: e.target.value }); 

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: 'flex'}}>
        <input 
        style={{ flex: '10', padding: '5px' }}
        type="text" 
        name="title" 
        placeholder="Add Todo ..."
        value={this.state.title}
        onChange={this.onChange}
         />
        <input 
        type="submit"
        value="Submit"
        className="btn" 
        style={{flex: '1'}}
        />
      </form>
    )
  }
}

export default AddTodo
