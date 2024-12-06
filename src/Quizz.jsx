import { useReducer } from "react"
import QuizzQuestion from "./QuizzQuestion"
import QuizzReducer from "./assets/scss/QuizzReducer"

const initialState = {
  questions: [],
  answers: [],
  currentQuestion: 0,
}
function Quizz() {
  const [state, dispatch] = useReducer(QuizzReducer, initialState)
  console.log(state)
  return (
    <main>
      <section>
        <h1 className='title'>Quizzical</h1>
        <section className='quizz-container'>
          <QuizzQuestion dis />
        </section>
      </section>
    </main>
  )
}
export default Quizz
