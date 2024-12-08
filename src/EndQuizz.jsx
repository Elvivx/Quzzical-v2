function EndQuizz({ score, currentQuestion }) {
  return (
    <div className='end'>
      <h1>Quiz Finished!</h1>
      <p>
        Your final score is {score} out of {currentQuestion}
      </p>
      <p>
        {score >= 7 && "😎😏You're Fantastic"}
        {score >= 4 ? "🙂😊You have a Good Result" : "😔😢You had a poor result"}
      </p>
      <button onClick={() => dispatchEvent({ type: "load" })}>Take Another Quizz</button>
    </div>
  )
}
export default EndQuizz
