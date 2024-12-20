import { useContext } from "react"
import { Context } from "../Context/Context"
function Welcome() {
  const { dispatch, state } = useContext(Context)
  return (
    <div className='welcome'>
      <h1 className='title'>Welcome to Quizzical!</h1>
      <p>Start your quiz journey here!</p>
      <p>{state.questions.length} questions are ready for you to answer!</p>
      <p>You have 1 minute per question else quizz will be submitted</p>
      <button onClick={() => dispatch({ type: "active" })}>{`Let's Start`}</button>
    </div>
  )
}

export default Welcome
