import {useState} from 'react';
function AdvancedForm(){
    const [formData,setFormData]=useState({
        gender:"",
        agree:"",
        country:"India"  
});
const handleSubmit=(event)=>{
    event.preventDefault();
    console.log(formData);   
}  
const handleChange=(event)=>{
    const {name,type,value,checked}=event.target;
    setFormData((prev)=>({
        ...prev,
        [name]:type==="checkbox"?checked:value//name is dynamic here it a field like name email or age and value is which is the user is changing

    }))
}

return (
    <form onSubmit={handleSubmit}>
        <h2>Form with checkbox , radio and select</h2>
        <label>
            <input type="radio"
             name="gender"
             value="Male"
             checked={formData.gender==="Male"}
             onChange={handleChange} />
            Male
        </label>
        <br />
        <br />
        <label>
            <input type="radio"
             name="gender"
              value="Female"
              checked={formData.gender==="Female"}
              onChange={handleChange} />
            Female
        </label>
        <br />
        <br />
        <label >
        Country:
        <select name="country" value={formData.country} onChange={handleChange}>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
        </select>
        </label>
        <br />
        <br />
        <label >
            <input type="checkbox"
             name="agree" 
             checked={formData.agree}
             onChange={handleChange}/>
            I agree to the terms and conditions
        </label>
        <br />
        <button type="submit">Submit</button>
    </form>
)
}
export default AdvancedForm;