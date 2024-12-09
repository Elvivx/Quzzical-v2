import { createContext, useEffect, useReducer } from "react"
import QuizzReducer from "../Quizz/QuizzReducer"
import PropTypes from "prop-types"
import axios from "axios"

export const Context = createContext()
const initialState = {
  questions: [],
  currentQuestion: 0,
  score: 0,
  status: "load",
  error: "",
  chosenAnswer: "",
  questionNum: 1,
  time: null,
}
export const QuizzContext = ({ children }) => {
  const [state, dispatch] = useReducer(QuizzReducer, initialState)
  useEffect(() => {
    const get = async () => {
      try {
        const data = await axios.get("https://the-trivia-api.com/v2/questions")
        //put each object in an array in an array
        const quest = data.data.map((ques) => [ques])
        dispatch({ type: "data", payload: quest })
      } catch (error) {
        dispatch({ type: "error", payload: error.message })
      }
    }
    get()
  }, [])

  const contextVals = { state, dispatch }
  return <Context.Provider value={contextVals}>{children}</Context.Provider>
}
QuizzContext.propTypes = {
  children: PropTypes.node.isRequired,
}
