import './App.css'
import {useState, useCallback} from "react";

function App() {
  const [count, setCount] = useState(0)

  const logging = useCallback(
    () => {
      console.log('count =', count)
    },
    []
  )

  const onClick = () => {
    setCount(count+1)
    logging()
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={onClick}>click me</button>
    </>
  )
}

export default App
