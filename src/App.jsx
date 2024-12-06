import { useReducer } from "react"
import Quizz from "./Quizz"
import "./assets/scss/App.scss"
function App() {
  const [state, shitter] = useReducer(fucker, 0)
  function fucker(states, bogus) {
    console.log(states)
    console.log(bogus)
    switch (bogus.type) {
      case "increment":
        return states + 1
      case "decrement":
        return states - 1
    }
    // if (action.type == "decrement") return states - action.payload
    // if (action.type == "increment") return states + action.payload
  }
  return (
    <div>
      <button onClick={() => shitter({ type: "decrement" })}>-</button>
      Quizz {state}
      <button onClick={() => shitter({ type: "increment" })}>+</button>
      <Quizz />
    </div>
  )
}
export default App
