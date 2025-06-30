import { useState } from 'react'
import './App.css'
import LoginRegi from './components/LoginRegi' 
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <LoginRegi></LoginRegi>
    </>
  )
}

export default App
