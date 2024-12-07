import { createContext, useEffect, useReducer } from "react"
import QuizzReducer from "./QuizzReducer"
import axios from "axios"

export const Context = createContext()
const initialState = {
  questions: [],
  answer: "",
  currentQuestion: 0,
  score: 0,
  status: "load",
}
export const QuizzContext = ({ children }) => {
  const [state, dispatch] = useReducer(QuizzReducer, initialState)
  useEffect(() => {
    const get = async () => {
      const data = await axios.get("https://the-trivia-api.com/v2/questions")
      const quest = data.data.map((ques) => [ques])
      dispatch({ type: "data", payload: quest })
    }
    get()
  }, [])

  const contextVals = {
    state,
    dispatch,
  }

  return <Context.Provider value={contextVals}>{children}</Context.Provider>
}
