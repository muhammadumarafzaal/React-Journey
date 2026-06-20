import Greeting from './Greeting.jsx'
import GreetingWithStyle from './GreetingWithStyle.jsx'
import PostListWithData from './PostListWithData.jsx'
function App() {

  return (

    <>
      <Greeting name="John" />
      <GreetingWithStyle name="Doe" />
      <PostListWithData />
    </>
  )
}

export default App
