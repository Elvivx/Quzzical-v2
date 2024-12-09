import { useState, useEffect, useContext } from "react"

import { Context } from "../Context/Context"
// import { preview } from "vite"
// import EndQuizz from "./EndQuizz"
function Time() {
  const { dispatch } = useContext(Context)

  // console.log(secs)
  const [timeLeft, setTimeLeft] = useState(1 * 60) // 5 minutes in seconds

  useEffect(() => {
    // Exit early if the timer has finished
    // if (timeLeft <= 0) dispatch({ type: "time", payload: timeLeft })

    // Set an interval to decrease the time
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1)
      // timeLeft == 0 && dispatch({ type: "end" })
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
