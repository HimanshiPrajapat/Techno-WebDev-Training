import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './Home'
// import './App.css' //importing css file 

function App() {                                    //react component start
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
    </>
  )
}

export default App                                  //react component end
