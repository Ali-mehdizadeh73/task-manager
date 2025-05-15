import React from 'react';
import TaskItem from './TaskItem';

class TaskList extends React.Component {
  render() {
    const { tasks, deleteTask, editTask } = this.props;

    return (
      <div className="space-y-4">
        {tasks.length === 0 ? (
          <p className="text-center text-gray-500">No tasks yet</p>
        ) : (
          tasks.map((task, index) => (
            <TaskItem
              key={index}
              index={index}
              task={task}
              deleteTask={deleteTask}
              editTask={editTask}
            />
          ))
        )}
      </div>
    );
  }
}

export default TaskList;

