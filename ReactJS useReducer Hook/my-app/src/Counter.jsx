import { useReducer } from "react";
function Counter() {
    function reducer(state,action){
        switch(action.type){
            case 'INCREMENT':
                return {count:state.count+1};
            case 'DECREMENT':
                return {count:state.count-1};
            case 'RESET':
                return {count:0};
            default:
                return state;
        }
    }
    const [state,dispatch]=useReducer(reducer,{count:0});
    return(
        <div>
            <h2>Count :{state.count}</h2>
            <button onClick={()=>dispatch({type:'DECREMENT'})}>-</button>
            <button onClick={()=>dispatch({type:'INCREMENT'})}>+</button>
            <button onClick={()=>dispatch({type:'RESET'})}>Reset</button>
        </div>
    )
}
export default Counter;