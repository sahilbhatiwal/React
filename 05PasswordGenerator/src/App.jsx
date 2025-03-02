import { useCallback, useEffect, useRef, useState } from "react"

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");


  const passwordRef =useRef(null);
  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(numAllowed) str +="1234567890"
    if(charAllowed) str += "{}[]()!@#$%^&*~<>_-"
    for(let i = 1; i <= length; i++){
      let num = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(num);
    }
    setPassword(pass);
    console.log("pass is " + pass);
    console.log("Password is " + password)
  },[length,numAllowed, charAllowed,setPassword])

  useEffect(()=>{
    passwordGenerator();
  },[length,numAllowed,charAllowed,passwordGenerator])
  const copyToClipBoard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,length)
    window.navigator.clipboard.writeText(password)  ;
  },[password ])
  return (    
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            value={password}
            ref={passwordRef} 
            readOnly
        />
        <button
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        onClick={copyToClipBoard}
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        value={length}
        min={6}
        max={100}
         className='cursor-pointer'
         onChange={(e)=>setLength(e.target.value)}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          id="numberInput"
          onChange={()=>setNumAllowed((prev)=>!prev)}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              id="characterInput"
              onChange={()=>{setCharAllowed((prev) => !prev)}}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
    
  )
}

export default App