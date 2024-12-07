import { useContext } from "react"
import QuizzQuestion from "./QuizzQuestion"
import { Context } from "./Context"
import Welcome from "./Welcome"
import Loader from "./Loader"
function Quizz() {
  const {
    state: { status, questions, answers },
    dispatch,
  } = useContext(Context)
  console.log(status, questions, answers)
  return (
    <main>
      {status === "ready" && <Welcome />}
      {status === "load" && <Loader />}
      {status === "active" && (
        <section>
          <h1 className='title'>Quizzical</h1>
          <section className='quizz-container'>
            <QuizzQuestion dispatch={dispatch} />
          </section>
        </section>
      )}
      {/* <Loader /> */}
    </main>
  )
}
export default Quizz
