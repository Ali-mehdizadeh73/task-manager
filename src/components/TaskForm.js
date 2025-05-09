import React, { Component } from 'react';

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
    return (
      <form className="mb-6 space-y-4" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Task title"
          className="w-full px-4 py-3 rounded-xl text-gray-700 bg-gray-200 shadow-neumorphic focus:outline-none"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          className="w-full px-4 py-3 rounded-xl text-gray-700 bg-gray-200 shadow-neumorphic focus:outline-none"
          value={this.state.description}
          onChange={this.handleChange}
        />
        <button className="w-full py-3 text-white font-semibold rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg hover:brightness-110">
          Add Task
        </button>
      </form>
    );
  }
}

export default TaskForm;

