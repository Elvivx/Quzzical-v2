// const [state, dispatch] = useReducer(reducer, initialState);
export default (state, action) => {
  switch (action.type) {
    case "next":
      return { ...state, currentQuestion: state.currentQuestion + 1 }
    case "ans":
      return { ...state, questions: ["fuck"] }
    default:
      return state
  }
}
