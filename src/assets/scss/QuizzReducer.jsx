// const [state, dispatch] = useReducer(reducer, initialState);
export default (state, action) => {
  switch (action.type) {
    case "next":
      return currentQuestion + 1
    default:
      return state
  }
}
