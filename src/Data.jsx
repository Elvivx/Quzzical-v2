import { useEffect } from "react"
import axios from "axios"
import { Context } from "./Context"
const { dispatch } = useContext(Context)

const get = async () => {
  const data = await axios.get("https://the-trivia-api.com/v2/questions")
  dispatch({ type: "data", payload: data })
  return data.data
}
