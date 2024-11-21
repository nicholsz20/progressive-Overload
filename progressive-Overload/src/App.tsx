import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import { MyContextProvider } from './Context/ContextProvider'

function App() {
  return (
    <MyContextProvider>
    <div>
      <Navbar />
    </div>
    </MyContextProvider>
  )
}

export default App
