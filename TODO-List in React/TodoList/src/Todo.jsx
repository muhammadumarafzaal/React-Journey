import {useState} from 'react'
import './Todo.css'

function Todo() {
    const[newTodo,setNewTodo] = useState(""); //for storing the new todo
    const [todos,setTodos] = useState([]); //for storing the list of todos

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(newTodo.trim()){
            setTodos([...todos,{text:newTodo,completed:false}]);
            setNewTodo("");
        }

    }
    const handleDelete=(index)=>{
        const newTodos = [...todos];
        newTodos[index].completed =  !newTodos[index].completed;
        setTodos(newTodos);

    }
     
    
  return (
    <div className="todo-container">
        <div className="todo-header">
            <h1>✓ TODO APP</h1>
            <p>Stay organized and boost productivity</p>
        </div>
        <form onSubmit={handleSubmit} className="todo-form">
            <input 
                type="text" 
                className="todo-input"
                placeholder='Add a new todo...'
                value={newTodo}
                onChange={(e)=>(setNewTodo(e.target.value))}
            />
            <button type='submit' className="submit-btn">Add Todo</button>
        </form>
        {todos.length === 0 ? (
            <div className="empty-state">
                <p>📝 No todos yet. Add one to get started!</p>
            </div>
        ) : (
            <ul className="todos-list">
                {todos.map((todo,index)=>(
                    <li key={index} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                        <span className="todo-text">
                            {todo.completed && <span style={{marginRight: '8px'}}>✓</span>}
                            {todo.text}
                        </span>
                        <button onClick={()=>handleDelete(index)} className="delete-btn">
                            {todo.completed ? 'Undo' : 'Done'}
                        </button>
                    </li>
                ))}
            </ul>
        )}
      
    </div>
  )
}

export default Todo
