import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  /* This is how we update without using hookes but the changes won't be propogated in the ui
  let counter = 0;
  const addValue = () =>{
    console.log("Clicked",counter)
    counter = counter + 1;
    
  }
  */
  let num = 0;
  let [counter, setCounter] = useState(num);
  const addValue = ()=>{
    // setCounter(counter + 1);
    // The above line can also be written as 
    if(counter < 20) //This line is written as it was an task given to set the upper limit of the counter to be 20
      counter = counter + 1;
    setCounter(counter);
  }
  const subtractValue = () =>{
    if(counter > 0) //This line is written as it was an task given to set the lower limit of the counter to be 0
      counter = counter - 1;
    setCounter(counter);
  }
  return (
    <>
    <h1>Chai aur Code</h1>
    <p>Counter Value is : {counter}</p>
    <button onClick={addValue}>Increase Count</button>
    <br />
    <br />
    <button onClick={subtractValue}>Decrease Count</button>

    </>
  )
}

export default App
