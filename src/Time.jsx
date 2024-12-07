import { useState, useEffect, useContext } from "react"

import { Context } from "./Context"
function Time() {
  // const {
  //   state: { time },
  //   dispatch,
  // } = useContext(Context)

  // console.log(time)
  const [timeLeft, setTimeLeft] = useState(5 * 60) // 5 minutes in seconds

  useEffect(() => {
    // Exit early if the timer has finished
    if (timeLeft <= 0) return

    // Set an interval to decrease the time
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1)
      // dispatch({ type: "time", payload: 1 })
    }, 1000)

    // Clear the interval when the component unmounts or when the timer ends
    return () => clearInterval(timer)
  }, [timeLeft])

  // Helper function to format the time as MM:SS
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`
  }

  return <div className='time'>{formatTime(timeLeft)}</div>
}

export default Time
