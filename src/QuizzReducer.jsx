export default (state, action) => {
  switch (action.type) {
    case "data":
      return { ...state, questions: action.payload, status: "ready" }
    case "ready":
      return { ...state, status: "ready" }
    case "load":
      return { ...state, status: "load" }
    case "error":
      return { ...state, status: "error", error: action.payload }
    case "active":
      return { ...state, status: "active" }
    case "next":
      return { ...state, currentQuestion: state.currentQuestion + 1 }
    case "answer ":
      return { ...state, answer: action.payload }
    case "score":
      return { ...state, score: state.score + 1 }
    default:
      return state
  }
}
