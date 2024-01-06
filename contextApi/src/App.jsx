import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/userContextProvider'

function App() {


  return (
    <>
      <UserContextProvider>
        
        <Login />
        <Profile />
      </UserContextProvider>
    </>
  )
}

export default App
