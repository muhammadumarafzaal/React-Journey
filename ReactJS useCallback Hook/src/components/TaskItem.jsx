import React, { useEffect, useState } from 'react';

/**
 * TaskItem - A memoized component to demonstrate useCallback.
 * 
 * We use React.memo(TaskItem) to ensure this component only re-renders
 * IF its props (task or onDelete) actually change.
 * 
 * IF App.jsx did NOT use useCallback for the onDelete function,
 * this component would re-render EVERY time App renders,
 * even if the tasks haven't changed!
 */
const TaskItem = React.memo(({ task, onDelete }) => {
  const [isFlashing, setIsFlashing] = useState(false);

  // This effect triggers a visual "flash" whenever the component renders.
  // It helps us visually see when a re-render occurs.
  useEffect(() => {
    setIsFlashing(true);
    const timer = setTimeout(() => setIsFlashing(false), 500);
    return () => clearTimeout(timer);
  }, [task, onDelete]); // Dependencies are the props

  console.log(`[Render] TaskItem: ${task.text}`);

  return (
    <li className={`task-item ${isFlashing ? 'render-flash' : ''}`}>
      <span>{task.text}</span>
      <button 
        className="delete-btn" 
        onClick={() => onDelete(task.id)}
      >
        Delete
      </button>
    </li>
  );
});

// Adding a display name for easier debugging in React DevTools
TaskItem.displayName = 'TaskItem';

export default TaskItem;
