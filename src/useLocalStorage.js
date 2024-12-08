import { useEffect, useState } from "react"

function useLocalStorage(key, value) {
  const [data, setData] = useState("")
  useEffect(() => {
    if (localStorage.getItem(key)) return
    localStorage.setItem(key, value)
    setData(localStorage.getItem(key))
  }, [])
  return { data }
}
export useLocalStorage
