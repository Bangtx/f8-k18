import './App.css'
import {useState, useCallback} from "react";
import {Button} from "@mui/material";
import {ProductDialog, CustomerDialog} from "./components";

function App() {
  const [count, setCount] = useState(0)

  const [isOpenProductDialog, setIsOpenProductDialog] = useState(false)
  const [isOpenCustomerDialog, setIsOpenCustomerDialog] = useState(false)

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
      <Button onClick={() => setIsOpenCustomerDialog(true)}>Open Cst Dialog</Button>
      <Button onClick={() => setIsOpenProductDialog(true)}>Open Prod Dialog</Button>
      <ProductDialog isOpen={isOpenProductDialog} handleClose={() => setIsOpenProductDialog(false)}/>
      <CustomerDialog isOpen={isOpenCustomerDialog} handleClose={() => setIsOpenCustomerDialog(false)}/>
    </>
  )
}

export default App
