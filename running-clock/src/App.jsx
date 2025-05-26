import { useState, useRef } from 'react'
import TimeDisplay from './TimeDisplay'

function App() {
  const [isRunning, setIsRunning] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [initialTime, setInitialTime] = useState(0)
  const [timerKey, setTimerKey] = useState(0)
  
  const minutesRef = useRef(null)
  const secondsRef = useRef(null)

  const handleStart = () => {
    const rawMinutes = Math.max(parseInt(minutesRef.current.value) || 0, 0)
    const rawSeconds = Math.max(parseInt(secondsRef.current.value) || 0, 0)
    
    const totalSeconds = (rawMinutes * 60) + rawSeconds
    
    if (totalSeconds > 0) {
      setTimerKey(prev => prev + 1)
      setInitialTime(totalSeconds)
      setIsRunning(true)
      setIsPaused(false)
    }
  }

  const handlePauseResume = () => {
    if (isRunning) {
      setIsPaused(!isPaused)
    }
  }

  const handleReset = () => {
    setIsRunning(false)
    setIsPaused(false)
    setInitialTime(0)
    setTimerKey(prev => prev + 1)
    
    if (minutesRef.current) minutesRef.current.value = 0
    if (secondsRef.current) secondsRef.current.value = 0
  }

  const handleTimerComplete = () => {
    setIsRunning(false)
    setIsPaused(false)
  }

  return (
    <div className="clock-container">
      <div className="input-container">
        <label>
          <input 
            type="number" 
            ref={minutesRef}
          />
          Minutes
        </label>
        <label>
          <input 
            type="number" 
            ref={secondsRef}
          />
          Seconds
        </label>
        <button onClick={handleStart}>START</button>
        <button onClick={handlePauseResume}>
        PAUSE / RESUME
        </button>
        <button onClick={handleReset}>RESET</button>
      </div>
      
      <TimeDisplay 
        key={timerKey}
        initialTime={initialTime}
        isRunning={isRunning}
        isPaused={isPaused}
        onComplete={handleTimerComplete}
      />
    </div>
  )
}

export default App
