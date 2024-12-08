function EndQuizz({ score, currentQuestion }) {
  return (
    <div className='end'>
      <h1>Quiz Finished!</h1>
      <p>
        Your final score is {score} out of {currentQuestion}
      </p>
    </div>
  )
}
export default EndQuizz
