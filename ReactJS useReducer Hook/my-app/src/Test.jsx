import {useReducer} from 'react'
function Test() {
    const [checked, toggle] = useReducer((checked)=>!checked,false);
    return (
        <div>
            <input type="checkbox" checked={checked} onChange={toggle} />
            <p>{checked ? 'Checked' : 'Not Checked'}</p>
        </div>
    );
}
export default Test;