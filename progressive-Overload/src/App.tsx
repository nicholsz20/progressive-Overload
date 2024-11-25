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
