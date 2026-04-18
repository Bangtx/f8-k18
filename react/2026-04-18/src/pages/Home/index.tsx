import {api} from '../../utils'
import {toast} from "react-toastify";
import {useEffect, useState} from "react";


const Home = () => {
  const [customers, setCustomers] = useState([])

  const getCustomers = async () => {
    const data = await api.get('/customers')
    setCustomers(data)
  }

  useEffect(() => {
    getCustomers()
  }, []);

  return (
    <>
      <h1>Home Page</h1>
    </>
  )
}

export default Home