import { useContext } from "react"
import QuizzQuestion from "./QuizzQuestion"
import { Context } from "./Context"
import Welcome from "./Welcome"
import Loader from "./Loader"
import Error from "./Error"

function Quizz() {
  const {
    state: { status, questions, chosenAnswer, currentQuestion, score, error },
    dispatch,
  } = useContext(Context)
  //   console.log(status, questions, chosenAnswer, currentQuestion, score, error, bod1
  console.log(chosenAnswer)
  return (
    <main>
      {status === "ready" && <Welcome />}
      {status === "load" && <Loader />}
      {status === "error" && <Error error={error} />}
      {status === "active" && (
        <section>
          <h1 className='title'>Quizzical</h1>
          <section className='quizz-container'>
            {questions[currentQuestion].map((question) => (
              <QuizzQuestion question={question} dispatch={dispatch} key={question.id} score={score} chosenAnswer={chosenAnswer} />
            ))}
          </section>
        </section>
      )}
    </main>
  )
}
export default Quizz
