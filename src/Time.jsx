// import { useState, useEffect, useContext, useRef } from "react"

// import { Context } from "./Context"
// import { preview } from "vite"
// // import EndQuizz from "./EndQuizz"
// function Time() {
//   const { dispatch } = useContext(Context)

//   // console.log(time)
//   const [timeLeft, setTimeLeft] = useState(1 * 60) // 5 minutes in seconds
//   const time = useRef("")

//   useEffect(() => {
//     // Exit early if the timer has finished
//     if (timeLeft <= 0) return

//     // Set an interval to decrease the time
//     const timer = setInterval(() => {
//       setTimeLeft((prevTime) => prevTime - 1)
//       time.current = timeLeft
//       // timeLeft == 0 && dispatch({ type: "end" })
//       // dispatch({ type: "time", payload: 1 })
//     }, 1000)

//     // Clear the interval when the component unmounts or when the timer ends
//     return () => clearInterval(timer)
//   }, [timeLeft])

//   // Helper function to format the time as MM:SS
//   const formatTime = (seconds) => {
//     const minutes = Math.floor(seconds / 60)
//     const secs = seconds % 60
//     return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`
//   }

//   return <div className='time'>{formatTime(timeLeft)}</div>
// }

// export default Time
