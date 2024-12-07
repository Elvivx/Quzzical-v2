import { useContext } from "react"
import QuizzQuestion from "./QuizzQuestion"
import { Context } from "./Context"
import Welcome from "./Welcome"
import Loader from "./Loader"

function Quizz() {
  const {
    state: { status, questions, answers, currentQuestion, score },
    dispatch,
  } = useContext(Context)
  console.log(status, questions, answers, currentQuestion, score)
  return (
    <main>
      {status === "ready" && <Welcome />}
      {status === "load" && <Loader />}
      {status === "active" && (
        <section>
          <h1 className='title'>Quizzical</h1>
          <section className='quizz-container'>
            {questions[currentQuestion].map((question) => (
              <QuizzQuestion question={question} dispatch={dispatch} key={question.id} score={score} />
            ))}
          </section>
        </section>
      )}
    </main>
  )
}
export default Quizz
