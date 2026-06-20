import { useState } from "react";
function BasicValidationForm() {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [errors,setErrors]=useState("");  
const handleSubmit=(e)=>{
    e.preventDefault();
    if(!name||!email){
        setErrors("All fields are required");
    }
    else{
        setErrors('');
        console.log("Form submitted",{name,email});
        alert("Form submitted successfully");
    }
}

  return (
     <>
     <form onSubmit={handleSubmit}>
        <h2>Basic Validation Form</h2>
        <input type="text" placeholder="Enter your name" value={name} onChange={(e)=>(setName(e.target.value))} />
        <br />
        <input type="email" placeholder="Enter your email" value={email} onChange={(e)=>(setEmail(e.target.value))}/>
        <br />
        {errors && <p style={{color:"red"}}>{errors}</p>}   
        <button type="submit">Submit</button>
     </form>
     </>
  );
}
export default BasicValidationForm