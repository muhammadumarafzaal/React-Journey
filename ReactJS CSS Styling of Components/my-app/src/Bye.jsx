//now we will style Bye component using  css modules
import styles from './Bye.module.css'
//here you can see we use external css styling by importing App.css file
//using className attribute to assign class to html element
function Bye(){
    return(
        //this is for css external styling 
        // <h2 className='test'>Bye Bye!</h2>
        //this is for css modules
        <h2 className={styles.test}>Bye Bye!</h2>
    )
} 
export default Bye;