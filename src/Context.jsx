import { createContext, useReducer } from "react"
import QuizzReducer from "./assets/scss/QuizzReducer"
export const Context = createContext()
export default function Context() {
  const initialState = {
    questions: [],
    answers: [],
    currentQuestion: 0,
  }
  const [state, dispatch] = useReducer(QuizzReducer, initialState)
  const contextVals = {
    state,
    dispatch,
  }
  return <Context.Provider value={contextVals}>{children}</Context.Provider>
}
