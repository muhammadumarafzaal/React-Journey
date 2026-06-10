// function Parent() {
//   const userName = "John Doe";
//   return (
//     <>
//       <Child name={userName} />
//     </>
//   );
// }

// function Child({ name }) {
//   return (
//     <>
//       <GrandChild name={name} />
//     </>
//   );
// }

// function GrandChild({ name }) {
//   return (
//     <>
//       <p>Hello {name}</p>
//     </>
//   );
// }

//State Lifting
import { useState } from "react"
function Parent() {
  const [text, setText] = useState("")
  return (
    <div>
      <Child onChange={setText} />
      <Display text={text} />
    </div>
  )
}
function Child({ onChange }) {
  return (
    <div>
      <input type="text" onChange={(e) => onChange(e.target.value)} />
    </div>
  )
}
//Shared State
function Display({ text }) {
  return (
    <>
      <h3>Typed:{text}</h3>
    </>
  )
}


function App() {

  return (

    <>
      <Parent />
    </>
  )
}

export default App
