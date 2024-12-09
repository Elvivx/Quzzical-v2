import { useState, useEffect, useContext } from "react"
import { Context } from "../Context/Context"

function Time() {
  const { dispatch } = useContext(Context)
  const [timeLeft, setTimeLeft] = useState(1 * 60)

  useEffect(() => {
    // Exit early if the timer has finished
    if (timeLeft <= 0) dispatch({ type: "time", payload: timeLeft })

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1)
    }, 1000)

    // Clear the interval
    return () => clearInterval(timer)
  }, [timeLeft])

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`
  }

  return <div className='time'>{formatTime(timeLeft)}</div>
}

export default Time
