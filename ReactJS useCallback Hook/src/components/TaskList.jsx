import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onDelete }) => {
  console.log('[Render] TaskList');
  
  return (
    <ul className="task-list">
      {tasks.map(task => (
        <TaskItem 
          key={task.id} 
          task={task} 
          onDelete={onDelete} 
        />
      ))}
      {tasks.length === 0 && (
        <p style={{ textAlign: 'center', opacity: 0.5 }}>No tasks yet...</p>
      )}
    </ul>
  );
};

export default TaskList;
