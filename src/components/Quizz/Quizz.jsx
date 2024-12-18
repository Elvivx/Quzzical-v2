import { useContext } from "react"
import QuizzQuestion from "./QuizzQuestion"
import { Context } from "../Context/Context"
import Welcome from "../Pages/Welcome"
import Loader from "../Helper/Loader"
import Error from "../Helper/Error"
import EndQuizz from "./EndQuizz"

function Quizz() {
  const {
    state: { status, questions, chosenAnswer, currentQuestion, score, error, questionNum, time },
    dispatch,
  } = useContext(Context)

  const options = questions[currentQuestion]
  const option = options ? options[0]?.incorrectAnswers.concat(options[0].correctAnswer).sort(() => Math.random() - 0.5) : []

  return (
    <main>
      {status === "ready" && <Welcome />}
      {status === "load" && <Loader />}
      {status === "error" && <Error error={error} />}
      {status === "end" && <EndQuizz currentQuestion={currentQuestion} score={score} dispatch={dispatch} />}
      {status === "active" && (
        <>
          <section className='quizz'>
            <h1 className='title'>Quizzical</h1>
            <section className='quizz-container'>
              {time == 0 ? (
                <EndQuizz dispatch={dispatch} />
              ) : (
                questions[currentQuestion].map((question) => (
                  <QuizzQuestion question={question} dispatch={dispatch} key={question.id} score={score} chosenAnswer={chosenAnswer} questionNum={questionNum} time={time} option={option} />
                ))
              )}
            </section>
          </section>
        </>
      )}
    </main>
  )
}
export default Quizz
