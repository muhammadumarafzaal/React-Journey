import React, { useState, useCallback, useEffect } from 'react';
import TaskList from './components/TaskList';
import './index.css';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Learn React useCallback' },
    { id: 2, text: 'Build a mini project' },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  // 1. WITHOUT useCallback: 
  // If we defined handleDelete like this:
  // const handleDelete = (id) => { ... };
  // A NEW function reference would be created on EVERY render of App.
  // This would cause TaskList and all TaskItems to re-render even if tasks didn't change!

  // 2. WITH useCallback:
  // We memoize the function. React will return the SAME function instance 
  // between renders unless the dependencies (tasks) change.
  const handleDelete = useCallback((id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }, []); // [] means this function instance stays the same forever

  const handleAddTask = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, { id: Date.now(), text: inputValue }]);
      setInputValue('');
    }
  };

  // Toggle theme effect on body (for styling)
  useEffect(() => {
    document.body.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  console.log('[Render] App');

  return (
    <div className="app-container">
      <div className="header">
        <h1>Smart Task Tracker</h1>
        <button 
          className="theme-toggle" 
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? '🌙 Dark' : '☀️ Light'}
        </button>
      </div>

      <div className="input-group">
        <input
          type="text"
          placeholder="What needs to be done?"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
        />
        <button className="add-btn" onClick={handleAddTask}>Add Task</button>
      </div>

      <TaskList tasks={tasks} onDelete={handleDelete} />

      <div className="stats">
        <p>Total Tasks: {tasks.length}</p>
        <p style={{ fontSize: '0.7rem', marginTop: '10px' }}>
          💡 <strong>Tip:</strong> Toggle the theme! 
          Notice that the task list does NOT "flash" (re-render) because 
          the <code>delete</code> function is memoized with <code>useCallback</code>.
        </p>
      </div>
    </div>
  );
}

export default App;
