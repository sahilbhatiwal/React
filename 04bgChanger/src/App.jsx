import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("Black")
  return (
    <>
    <div className='w-full h-screen' style={{backgroundColor: color}}>
      <div className=' bg-gray-500  rounded-3xl'>
        <button className=' bg-white text-black px-10 m-10    rounded-3xl' onClick={()=> setColor("GREY")}> GREY</button>
        <button className=' bg-red-800 text-black px-10 m-10  rounded-3xl' onClick={()=>{setColor("red")}}> Red</button>
        <button className=' bg-blue-800 text-black px-10 m-10 rounded-3xl' onClick={ ()=>setColor("Blue")}> Blue</button>
      </div>
    </div>
    </>
  )
}

export default App
