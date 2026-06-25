import style from './Bye.module.css'
// import './App.css' 
function Prop(props){
    const {name='guest',age=20,city='Unknown',hobbies} = props;//also set default values here
    return(
        <div>
        <h2 className={style.test}>Hello {name} and my age is {age} and city is {city}</h2>
        <ul>
            {hobbies.map((hobbies,index)=>(
                <li key={index}>{hobbies}</li>
            ))}
        </ul>
        </div>
    );

}
export default Prop;