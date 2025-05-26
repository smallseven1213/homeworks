import { useState, useEffect, useRef } from 'react'
import { formatTime } from './utils/timeUtils'

function TimeDisplay({ initialTime, isRunning, isPaused, onComplete }) {
  const [remainingTime, setRemainingTime] = useState(() => initialTime > 0 ? initialTime : 0)
  const intervalRef = useRef(null)
  const endTimeRef = useRef(null)
  const pauseTimestampRef = useRef(null)

  useEffect(() => {
    if (isRunning) {
      if (isPaused) {
        pauseTimestampRef.current = Date.now();
      } else {
        if (pauseTimestampRef.current) {
          const pauseDuration = Date.now() - pauseTimestampRef.current;
          endTimeRef.current += pauseDuration;
          pauseTimestampRef.current = null;
        } else if (!endTimeRef.current) {
          endTimeRef.current = Date.now() + initialTime * 1000;
        }
      }
    } else if (!isPaused) {
      endTimeRef.current = null;
      pauseTimestampRef.current = null;
    }
  }, [isRunning, isPaused, initialTime]);

  useEffect(() => {
    if (isRunning && !isPaused) {
      intervalRef.current = setInterval(() => {
        const now = Date.now();
        if (endTimeRef.current) {
          const remaining = Math.max(0, Math.ceil((endTimeRef.current - now) / 1000));
          
          setRemainingTime(remaining);
          
          if (remaining <= 0) {
            clearInterval(intervalRef.current);
            onComplete();
          }
        }
      }, 100);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }
  }, [isRunning, isPaused, onComplete, initialTime])

  return <h1 data-testid="running-clock">{formatTime(remainingTime)}</h1>
}

export default TimeDisplay