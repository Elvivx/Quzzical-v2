import { useContext } from "react"
import { Context } from "./Context"
function Welcome() {
  const { dispatch } = useContext(Context)
  return (
    <div className='welcome'>
      <h1>Welcome Quizzical!</h1>
      <p>Start your quiz journey here!</p>
      <p>X questions are ready for you to answer!</p>
      <button onClick={() => dispatch({ type: "active" })}>{`Let's Start`}</button>
    </div>
  )
}

export default Welcome
