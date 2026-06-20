import {useRef} from 'react';
function UncontrolledForm(){
    const nameRef= useRef();
    const emailRef= useRef();
    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
    }


    return(
        <form onSubmit={handleSubmit}>
            <h2>Unctrolled Form</h2>
            <input type="text" ref={nameRef} placeholder='Name' />
            <br />
            <input type="email" ref={emailRef} placeholder='Email' />
            <br />
            <button type="submit">Submit</button>
        </form>

    )

} 
export default UncontrolledForm;