function useLocalStorage(key, value) {
  if (localStorage.getItem(key)) return
  localStorage.setItem(key, value)
  const data = localStorage.getItem(key)
  return { data }
}
export default useLocalStorage
