import {useState, useEffect, use} from 'react'
import api from './plugins/axios.ts'
import { ToastContainer, toast } from 'react-toastify'
import {Item, Item2} from './components'

function App() {
  const [jobs, setJobs] = useState([])
  const [count, setCount] = useState(0)
  const notify = () => toast.warning("Wow so easy!")

  const getJobs = async () => {
    try {
      const {data} = await api.get('/todos')
      setJobs(data)
    } catch (e) {
      toast.error("Get Data Failed")
    }
  }

  useEffect(
    () => {
      getJobs()
    },
    []
  )

  const [isShow, setIsShow] = useState(false)

  const ontoggle = () => {
    setIsShow(!isShow)
  }

  return (
    <>
      <ToastContainer />
      <button onClick={notify}>Notify!</button>
      <Item color={'blue'} text={'hehehehhe'} isShow={isShow} onTg={ontoggle}/>
      {/*{*/}
      {/*  jobs.map((job, index) => <p key={index}>{job.title}</p>)*/}
      {/*}*/}

      {/*<button onClick={() => setCount(count+1)}>click</button>*/}
    </>
  )
}

export default App
