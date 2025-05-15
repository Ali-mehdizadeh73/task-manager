import React, { Component } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  state = {
    tasks: [],
    isDarkMode: false,
  };
  toggleDarkMode = () => {
    this.setState({ isDarkMode: !this.state.isDarkMode})
  };

  addTask = (task) => {
    this.setState({ tasks: [...this.state.tasks, task] });
  };

  deleteTask = (index) => {
    const tasks = this.state.tasks.filter((_, i) => i !== index);
    this.setState({ tasks });
  };
  editTask = (index) => {
    const task = this.state.tasks[index];
    const newTitle = prompt("Edit title", task.title);
    const newDescription = prompt("Edit description", task.description);

    if (newTitle && newDescription) {
      const updatedTask = { ...task, title: newTitle, description: newDescription };
      const tasks = [...this.state.tasks];
      tasks[index] = updatedTask; // به‌روزرسانی تسک در آرایه
      this.setState({ tasks }); // به‌روزرسانی state
    }
  };

  render() {
    const { isDarkMode } = this.state;
    const themeClass = isDarkMode ? "dark" : "light";
    return (
    <div className={`min-h-screen flex justify-center items-start pt-10 ${themeClass}`}>
      <div className="w-full max-w-xl px-6">
        <button
          onClick={this.toggleDarkMode}
          className={`custom-btn mb-4 px-3 py-1 text-sm w-20 ${isDarkMode ? "dark" : "light"}`}
          >
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
        <h1 className="text-3xl font-bold text-center mb-8">
          Task Manager
        </h1>
        <TaskForm addTask={this.addTask} isDarkMode={this.state.isDarkMode} />
        <TaskList tasks={this.state.tasks} deleteTask={this.deleteTask} editTask={this.editTask} isDarkMode={this.state.isDarkMode} />
      </div>
    </div>
    );
  }
}

export default App;