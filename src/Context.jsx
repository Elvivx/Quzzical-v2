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
  error: "",
}
export const QuizzContext = ({ children }) => {
  const [state, dispatch] = useReducer(QuizzReducer, initialState)
  useEffect(() => {
    const get = async () => {
      try {
        const data = await axios.get("https://the-trivia-api.com/v2/questions")
        const quest = data.data.map((ques) => [ques])
        dispatch({ type: "data", payload: quest })
      } catch (error) {
        console.log(error.message)
        dispatch({ type: "error", payload: error.message })
      }
    }
    get()
  }, [])

  const contextVals = {
    state,
    dispatch,
  }

  return <Context.Provider value={contextVals}>{children}</Context.Provider>
}
