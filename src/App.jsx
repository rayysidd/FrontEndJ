import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SportsStoresMap from './components/SportsStoresMap'
import YouTubeTutorials from './components/YoutubeTutorials'
import News from './components/News'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <News/>
    </div>
  )
}

export default App
