// const [state, dispatch] = useReducer(reducer, initialState);
export default (state, action) => {
  switch (action.type) {
    case "ans":
      return { ...state, questions: ["fuck"] }
    default:
      return state
  }
}
