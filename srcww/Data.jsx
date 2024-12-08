import { useContext } from "react"
import axios from "axios"
import { Context } from "./Context"

export const Get = async () => {
  const { dispatch } = useContext(Context)
  const data = await axios.get("https://the-trivia-api.com/v2/questions")
  dispatch({ type: "data", payload: data })
  return data.data
}
