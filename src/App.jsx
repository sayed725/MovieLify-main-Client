import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Bs0Circle } from "react-icons/bs";
import Swal from 'sweetalert2';

function App() {
  const [count, setCount] = useState(0)

  const onclick= () =>{
    Swal.fire("SweetAlert2 is working!");
  }

  return (
    <>
     
      <h1 className='text-6xl font-bold text-blue-500'>Vite + React</h1>
      <button onClick={onclick}
       className='btn'>click me</button>
       <Bs0Circle />
     
     
    </>
  )
}

export default App
