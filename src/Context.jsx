import { createContext, useEffect, useReducer } from "react"
import QuizzReducer from "./QuizzReducer"
import axios from "axios"
export const Context = createContext()
export const QuizzContext = ({ children }) => {
  const initialState = {
    questions: [],
    answers: [],
    currentQuestion: 0,
    status: "load",
  }
  const [state, dispatch] = useReducer(QuizzReducer, initialState)
  useEffect(() => {
    const get = async () => {
      const data = await axios.get("https://the-trivia-api.com/v2/questions")
      dispatch({ type: "data", payload: data.data })
    }

    get()
  }, [])
  const contextVals = {
    state,
    dispatch,
  }
  //   console.log(state)
  return <Context.Provider value={contextVals}>{children}</Context.Provider>
}
