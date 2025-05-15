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
            className="px-3 py-1 text-sm w-20 text-white rounded-md hover:bg-red-600"
            >
            <svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">
              <path d="M 10.806641 2 C 10.289641 2 9.7956875 2.2043125 9.4296875 2.5703125 L 9 3 L 4 3 A 1.0001 1.0001 0 1 0 4 5 L 20 5 A 1.0001 1.0001 0 1 0 20 3 L 15 3 L 14.570312 2.5703125 C 14.205312 2.2043125 13.710359 2 13.193359 2 L 10.806641 2 z M 4.3652344 7 L 5.8925781 20.263672 C 6.0245781 21.253672 6.877 22 7.875 22 L 16.123047 22 C 17.121047 22 17.974422 21.254859 18.107422 20.255859 L 19.634766 7 L 4.3652344 7 z"></path>
          </svg>
          </button>
          <button
            onClick={() => editTask(index)}
            className="px-3 py-1 text-sm w-20 text-white rounded-md hover:bg-blue-600"
            >
          <svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">
            <path d="M 18.414062 2 C 18.158188 2 17.902031 2.0974687 17.707031 2.2929688 L 16 4 L 20 8 L 21.707031 6.2929688 C 22.098031 5.9019687 22.098031 5.2689063 21.707031 4.8789062 L 19.121094 2.2929688 C 18.925594 2.0974687 18.669937 2 18.414062 2 z M 14.5 5.5 L 3 17 L 3 21 L 7 21 L 18.5 9.5 L 14.5 5.5 z"></path>
          </svg>
          </button>
        </div>
      </div>
    );
  }
}

export default TaskItem;