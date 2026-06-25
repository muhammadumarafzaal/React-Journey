//now we will style Bye component using  css modules
// import styles from './Bye.module.css'
//here you can see we use external css styling by importing App.css file

//import { use } from "react";

//using className attribute to assign class to html element
function Bye(){
    const user = [
      {firstName : 'John', lastName : 'Doe', Age : 25},
      {firstName : 'Anna', lastName : 'Smith', Age : 30},
      {firstName : 'Peter', lastName : 'Jones', Age : 45}
    ]
    function fullName(user){
        return user.firstName + ' ' + user.lastName;
    }
    return(
        //this is for css external styling 
        // <h2 className='test'>Bye Bye!</h2>
        //this is for css modules
        // <h2 className={styles.test}>Bye Bye!</h2>
        <div>
            <h1>Person Details</h1>
            <ul>
            {user.map((user, index) => (
                 <li>{fullName(user)} is {user.Age} years old - {index} </li>
            ))}
            </ul>
        </div>


    )
} 
export default Bye; 