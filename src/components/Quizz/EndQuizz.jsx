import useLocalStorage from "../Helper/useLocalStorage"
function EndQuizz({ score, currentQuestion, dispatch }) {
  const [data, setData] = useLocalStorage("highScore", score)
  // setData(score)
  return (
    <div className='end'>
      <h1>Quiz Finished!</h1>
      <p>
        Your final score is <span>{score}</span> out of <span>{currentQuestion} </span>
      </p>
      <p>
        {score >= 7 && "😎😏You're Fantastic"}
        {score >= 4 ? "🙂😊You have a Good Result" : "😔😢You had a poor result"}
      </p>
      <p>HighScore: {data > score ? data : score}</p>
      <button onClick={() => dispatch({ type: "retake" })}>Take Another Quizz</button>
    </div>
  )
}
export default EndQuizz
