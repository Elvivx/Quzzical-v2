export default (state, action) => {
  switch (action.type) {
    case "data":
      return { ...state, questions: action.payload, status: "ready" }
    case "ready":
      return { ...state, status: "ready" }
    case "load":
      return { ...state, status: "load" }
    case "active":
      return { ...state, status: "active" }
    case "next":
      return { ...state, currentQuestion: state.currentQuestion + 1 }

    default:
      return state
  }
}
