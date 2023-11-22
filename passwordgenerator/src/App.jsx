

import { useCallback, useState ,useEffect ,useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(6)
  const [password, setPassword] = useState("");
  const [allowedNumber, setAllowedNumber] = useState(false);
  const [allowedAlphanumeric, setAllowedAlphanumeric] = useState(false);

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (allowedNumber) str += '0123456789'
    if (allowedAlphanumeric) str += '!@#$%^&*()+_-?|}{'

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length );
      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [length, allowedNumber, allowedAlphanumeric, setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current.select();
    window.navigator.clipboard.writeText(password);
  },[password])

  useEffect(() => {
       generatePassword()
  }, [length, allowedNumber, allowedAlphanumeric])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-700 text-orange-500'>
        <h1 className='text-xl text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            placeholder='Password'
            readOnly
            ref={passwordRef}
            className='outline-none w-full py-1 px-3'
          />
          <button 
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0'>
            copy
            </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={allowedNumber}
              className='cursor-pointer'
              onClick={() => setAllowedNumber(prev => !prev)}
            />
            <label>Number</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={allowedAlphanumeric}
              className='cursor-pointer'
              onClick={() => setAllowedAlphanumeric(prev => !prev)}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>


    </>
  )
}

export default App
