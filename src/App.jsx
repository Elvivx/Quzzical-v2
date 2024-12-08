import Quizz from "./components/Quizz/Quizz"
import "./assets/scss/App.scss"
import { QuizzContext } from "./components/Context/Context"

function App() {
  return (
    <QuizzContext>
      <Quizz />
    </QuizzContext>
  )
}
export default App
