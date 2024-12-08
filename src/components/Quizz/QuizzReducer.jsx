export default function reducer(state, action) {
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
      return { ...state, currentQuestion: state.currentQuestion + 1, questionNum: state.questionNum + 1 }
    case "score":
      return { ...state, score: state.score + 1 }
    case "ans":
      return { ...state, chosenAnswer: action.payload }
    // case "questionNum":
    //   return { ...state, questionNum: state.questionNum + 1 }
    case "time":
      return { ...state, time: state.time - action.payload }
    case "end":
      return { ...state, status: "end" }
    case "retake":
      return location.reload()
    default:
      return state
  }
}
