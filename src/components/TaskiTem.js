import React from "react";

class TaskItem extends React.Component {
  render() {
    const { task, index, deleteTask, editTask} = this.props;

    if(!task) {
      return null;
    }

    return (
      <div className="p-4 rounded-xl bg-gray-200 shadow-neumorphic flex justify-between items-start">
        <div>
          <h5 className="font-semibold text-lg text-gray-800 mb-1">
            {task.title}
          </h5>
          <p className="text-sm text-gray-600">{task.description}</p>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => deleteTask(index)}
            className="px-3 py-1 text-sm w-20 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
            Delete
          </button>
          <button
            onClick={() => editTask(index)}
            className="px-3 py-1 text-sm w-20 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-md shadow-lg hover:brightness-110"
            >
          Edit
          </button>
        </div>
      </div>
    );
  }
}

export default TaskItem;