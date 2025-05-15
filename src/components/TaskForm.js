import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'; // ایمپورت Button از react-bootstrap

class TaskForm extends Component {
  state = {
    title: '',
    description: ''
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { title, description } = this.state;
    if (title.trim() !== '') {
      this.props.addTask({ title, description });
      this.setState({ title: '', description: '' });
    }
  };

  render() {
    const { isDarkMode } = this.props;
    
    return (
    <form className="mb-6 space-y-4" onSubmit={this.handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Task title"
        className={`form-control mb-3 ${isDarkMode ? "dark" : "light"}`}
        value={this.state.title}
        onChange={this.handleChange}
      />
      <textarea
        name="description"
        placeholder="Description"
        className={`form-control mb-3 ${isDarkMode ? "dark" : "light"}`}
        value={this.state.description}
        onChange={this.handleChange}
      />
      <Button variant={isDarkMode ? "secondary" : "primary"} type="submit" className="w-100">
        Add Task
      </Button>
    </form>
    );
  }
}

export default TaskForm;