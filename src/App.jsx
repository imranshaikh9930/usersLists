import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './Components/Sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1 className="text-3xl text-red-500 bg-purple-600">Imran</h1> */}
      <main className=" mx-auto flex justify-center items-center w-full">

      <Sidebar/>
      </main>
    </>
  )
}

export default App
