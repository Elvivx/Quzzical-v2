import { createContext, useReducer } from "react"
import QuizzReducer from "./QuizzReducer"
export const Context = createContext()
export const QuizzContext = ({ children }) => {
  const initialState = {
    questions: [],
    answers: [],
    currentQuestion: 0,
    status: "load",
  }
  const [state, dispatch] = useReducer(QuizzReducer, initialState)
  const contextVals = {
    state,
    dispatch,
  }
  console.log(state)
  return <Context.Provider value={contextVals}>{children}</Context.Provider>
}
