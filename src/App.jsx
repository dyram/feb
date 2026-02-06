import { useState } from 'react'
import QuestionPage from './components/QuestionPage'
import CelebrationPage from './components/CelebrationPage'
import './App.css'

function App() {
  const [accepted, setAccepted] = useState(false)

  const handleYes = () => {
    setAccepted(true)
  }

  return (
    <div className="app">
      {!accepted ? (
        <QuestionPage onYes={handleYes} />
      ) : (
        <CelebrationPage />
      )}
    </div>
  )
}

export default App
