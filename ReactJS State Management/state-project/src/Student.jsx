//shortcut rfce

import {useState} from 'react'
// multiple states
function Student() {
    //in this we will mangeing the object
    const [student,setStudent] = useState({
        name:"John",
        grade:'A',
        city:"New York"
    });
    const changeCity = ()=>{
        // use spread operator so other values didnot change
        setStudent({...student,city:"Los Angeles"})
    }
 
  return (
    <div>
        <h2>Name : {student.name}</h2>
        <h3>Grade :{student.grade}</h3>
        <h4>City :{student.city}</h4>
        <button onClick={changeCity}>
           Change City 
        </button>

    </div>
  )
}

export default Student

