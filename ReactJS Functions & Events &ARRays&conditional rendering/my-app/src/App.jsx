// import Array from './Array.jsx'
// import Bye from './Bye.jsx'
// import Check from './Check.jsx'
// import Hello from './Hello.jsx'
import Prop from './Prop.jsx'
import Button from './Button.jsx'
function App() {
//   const isLoggedIn = false;
//  if (isLoggedIn) {
//   return(<Hello/>);
// }
// else{
//   return(<Check />);
// }

//now want to send array values
const hobbies = ['coding','gaming','reading'];

function message(){
  alert('Button clicked!');
}
function byeMessage(){
  alert('Button clicked! okay bye');
}
return(
<>
<Prop name="Umar" age={20} city='Lahore' hobbies={hobbies}/>
<Prop name="Ali" age={25} city='Karachi' hobbies={hobbies}/>
<Button label="Click Me" onClick={message}/>
<Button label="Click Me 2" onClick={byeMessage}/>

</> 
);
}

export default App
