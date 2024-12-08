import { useContext } from "react"
import QuizzQuestion from "./QuizzQuestion"
import { Context } from "./Context"
import Welcome from "./Welcome"
import Loader from "./Loader"
import Error from "./Error"
import EndQuizz from "./EndQuizz"

function Quizz() {
  const {
    state: { status, questions, chosenAnswer, currentQuestion, score, error, questionNum, time },
    dispatch,
  } = useContext(Context)

  const options = questions[currentQuestion]
  console.log(options)
  const option = options ? options[0]?.incorrectAnswers.concat(options[0].correctAnswer).sort(() => Math.random() - 0.5) : []
  //   console.log(option)
  const calculateProgress = () => {
    return ((questionNum - 1) / questions.length - 1) * 100
  }
  return (
    <main>
      {status === "ready" && <Welcome />}
      {status === "load" && <Loader />}
      {status === "error" && <Error error={error} />}
      {status === "end" && <EndQuizz />}
      {status === "active" && (
        <section>
          <h1 className='title'>Quizzical</h1>
          <section className='quizz-container'>
            {time == 0 ? (
              <EndQuizz />
            ) : (
              questions[currentQuestion].map((question) => (
                <QuizzQuestion
                  question={question}
                  dispatch={dispatch}
                  key={question.id}
                  score={score}
                  chosenAnswer={chosenAnswer}
                  questionNum={questionNum}
                  time={time}
                  option={option}
                  progress={calculateProgress}
                />
              ))
            )}
          </section>
        </section>
      )}
    </main>
  )
}
export default Quizz
