import { useState, useMemo, memo } from 'react';

function Parent() {
    const [count, setCount] = useState(0);
    
    const user = useMemo(() => ({ name: "John", age: 30 }), []); 
    
    console.log("Parent component is rendering...");
    
    return (
        <div>
            <h2>Parent count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment Parent Count</button>
            <Child user={user} />
        </div>
    );
}


const Child = memo(function Child({ user }) {
    console.log("Child component is rendering...");
    
    return (
        <div>
            <h3>Child Component</h3>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
        </div>
    );
});

export default Parent;