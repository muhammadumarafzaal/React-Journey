import {useState} from 'react';
function MultiInputForm(){
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        age:""  
});
const handleSubmit=(event)=>{
    event.preventDefault();
    console.log(formData);   
}  
const handleChange=(event)=>{
    const {name,value}=event.target;
    setFormData((prev)=>({
        ...prev,
        [name]:value//name is dynamic here it a field like name email or age and value is which is the user is changing

    }))
}
    return(
        <form onSubmit={handleSubmit}>
            <h2>Multi Input Form Example</h2>
            <input
             name="name"  
             type="text"  
             placeholder="Name"
             value={formData.name}
             onChange={handleChange}
             />
            <br />
            <input name="email" type="email" 
            value={formData.email}
            onChange={handleChange}
            placeholder="Email" />
            <br />
            <input name="age" type="text"
             value={formData.age}
             onChange={handleChange}
             placeholder="Age" />
            <br />
            <button type="submit">Submit</button>
        </form>
    );

}
export default MultiInputForm;