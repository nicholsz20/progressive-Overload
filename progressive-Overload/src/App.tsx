import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import { MyContextProvider } from './Context/ContextProvider'
import WorkoutOverview from './Components/WorkoutOverview'

function App() {
  return (
    <MyContextProvider>
    <div>
      <Navbar />
      <WorkoutOverview />
    </div>
    </MyContextProvider>
  )
}

export default App
