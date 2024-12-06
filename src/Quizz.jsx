import { useContext } from "react"
import QuizzQuestion from "./QuizzQuestion"
import { Context } from "./Context"
function Quizz() {
  const { state, dispatch } = useContext(Context)
  console.log(state)
  return (
    <main>
      <section>
        <h1 className='title'>Quizzical</h1>
        <section className='quizz-container'>
          <QuizzQuestion dispatch={dispatch} />
        </section>
      </section>
    </main>
  )
}
export default Quizz
