import { useContext } from "react"
import QuizzQuestion from "./QuizzQuestion"
import { Context } from "./Context"
import Welcome from "./Welcome"
import Loader from "./Loader"
import Time from "./Time"
function Quizz() {
  const {
    state: { status, questions, answers, currentQuestion },
    dispatch,
  } = useContext(Context)
  console.log(status, questions, answers, currentQuestion)
  return (
    <main>
      {status === "ready" && <Welcome />}
      {status === "load" && <Loader />}
      {status === "active" && (
        <section>
          <h1 className='title'>Quizzical</h1>
          <section className='quizz-container'>
            {questions[currentQuestion].map((question) => (
              <QuizzQuestion question={question} dispatch={dispatch} key={question.id} />
            ))}
          </section>
          <section className='nav'>
            {/* <button className='prev'>Prev</button>
          <button className='retake hide'> Take Another Quiz </button> */}
            <Time />
            <button className='next' onClick={() => dispatch({ type: "next" })}>
              Next
            </button>
          </section>
        </section>
      )}
    </main>
  )
}
export default Quizz
