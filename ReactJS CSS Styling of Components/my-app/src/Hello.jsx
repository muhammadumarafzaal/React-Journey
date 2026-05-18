import './App.css'

function Hello(){
    const name = "Umar Afzaal"
    //now i am going to use inline css styling
    //this is also the one way and good way
    // const headingStyle = {
    //     color : "green",
    //     textAlign : "center",
    //     backgroundColor : "pink",
    //     fontSize : 40


    // }
    //other way is double curly brackets
    return(
        <h2 style={{color : "green",
        textAlign : "center",
        backgroundColor : "blue",
        fontSize : 40}} >Hello {name} </h2>
    )
}
export default Hello;