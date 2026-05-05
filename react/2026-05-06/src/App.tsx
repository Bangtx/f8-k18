import { createContext, useContext, useState } from 'react';

const Context = createContext(null)

const ChildComponent = () => {
  const injector = useContext(Context)
  return (
    <>
      <p>child: {injector.name}</p>
    </>
  )
}

const ParentComponent = () => {
  const injector = useContext(Context)

  return (
    <>
      <p>parent: {injector.age}</p>
      <ChildComponent/>
    </>
  )
}

function App() {
  const provider = {
    name: 'f8',
    age: 6
  }

  return (
    <Context value={provider}>
      <ParentComponent/>
    </Context>
  )
}

export default App
