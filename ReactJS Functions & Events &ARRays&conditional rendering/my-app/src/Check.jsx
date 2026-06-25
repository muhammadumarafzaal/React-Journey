import './condition.css'
function Check(){
    // const isLoggedIn = true;
    // // let message;
    // // if (isLoggedIn) {
    // //     message = <h1>Welcome Back!</h1>;
    // // } else {
    // //     message = <h1>Please Login</h1>;
    // // }
    // // return <div>{message}</div>

    // //using ternary operator
    // return(
    //     <div>
    //         {isLoggedIn? <h1>Welcome Back!</h1> : <h1>Please Login</h1>}
    //     </div>
    // )
    const isVisible = true;
    const visibility=isVisible? "visible" : "hidden";
    return(
        <div>
            <h1 className={visibility}>Conditional Rendering with css</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto dolores atque enim neque aspernatur ex, sequi quia similique, esse sit mollitia corporis expedita dolorum laudantium delectus officiis ipsa iusto sapiente.</p>
        </div>
    )
}
export default Check;