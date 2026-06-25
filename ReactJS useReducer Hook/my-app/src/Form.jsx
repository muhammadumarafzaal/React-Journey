import { useReducer } from "react";
import "./Form.css";
function Counter()
 {
    function reducer(state,action){
        return{
            ...state,
            [action.name]:action.value 
        }
    }
    const [formdata,dispatch]=useReducer(reducer,{
        username:"",
        email:""
    });
    function handleChange(e)
    {
        dispatch({
            name:e.target.name,
            value:e.target.value       
    })
    }
    return(
        <div className="form-shell">
            <form className="form-panel" action="">
                <input className="form-input" type="text" name="username"  placeholder="User Name"
                value={formdata.username}
                onChange={handleChange}
                />
                <input className="form-input" type="email" name="email" placeholder="Email"
                value={formdata.email}
                onChange={handleChange}
                 />
                 <p className="form-output">
                    {formdata.username} - {formdata.email}
                 </p>
            </form>
        </div>
    )
}
export default Counter;