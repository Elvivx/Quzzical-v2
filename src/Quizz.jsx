import { useContext } from "react"
import QuizzQuestion from "./QuizzQuestion"
import { Context } from "./Context"
import Welcome from "./Welcome"
function Quizz() {
  const {
    state: { status, questions, answers },
    dispatch,
  } = useContext(Context)
  console.log(status, questions, answers)
  return (
    <main>
      {}
      <section>
        {}
        <h1 className='title'>Quizzical</h1>
        <section className='quizz-container'>
          <QuizzQuestion dispatch={dispatch} />
        </section>
      </section>
    </main>
  )
}
export default Quizz
