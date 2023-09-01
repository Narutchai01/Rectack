import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-red-500 h-16 flex justify-center items-center'>
        <div className='text-black font-bold text-xl text-16 bg-white w-1/2 h-2/3 flex items-center justify-center rounded-md'>
          Rectack
        </div>
      </div>
    </>
  )
}

export default App
