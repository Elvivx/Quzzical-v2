import { useState } from "react"
import Time from "./Time"
import PropTypes from "prop-types"

function QuizzQuestion({ dispatch, question, score, chosenAnswer, questionNum, option }) {
  //   const options = question.incorrectAnswers.concat(question.correctAnswer)
  const correctAnswer = question.correctAnswer
  console.log(chosenAnswer)

  const [selectedOption, setSelectedOption] = useState("")
  console.log(correctAnswer == chosenAnswer)

  const next = () => {
    correctAnswer == chosenAnswer && dispatch({ type: "score" })
    dispatch({ type: "next" })
    dispatch({ type: "questionNum" })
  }

  const getClassName = (option) => {
    if (selectedOption === "") return "" // No class if nothing is selected
    return option === correctAnswer ? "correct" : option === selectedOption ? "wrong" : ""
  }

  const select = (e) => {
    const selected = e.target.value
    dispatch({ type: "ans", payload: selected })

    e.target.style = "border: 4px solid #c592ff"
    setSelectedOption(selected)
  }

  return (
    <div className='quiz ' data-indexs='1'>
      <section className='questions'>
        <h2>Question {questionNum}</h2>
        <div className='score'>
          <div className='bar'>
            <div className='progress'></div>
          </div>
          <h3>{score}/10</h3>
        </div>
        <div className='question'>
          <p>{question.question.text}</p>
        </div>
      </section>
      <section className='answers'>
        {/* <!-- div.btns --> */}

        <div className='answers-options'>
          {option.map((option) => (
            <button className={`btn ${getClassName(option)}`} onClick={select} key={`${question.id}-${option}`} value={option} disabled={!!selectedOption}>
              {option}
            </button>
          ))}
        </div>
        <section className='nav'>
          {/* <button className='prev'>Prev</button> */}
          <Time />
          {questionNum == 10 ? (
            <button className='retake' onClick={() => location.reload()}>
              Take Another Quiz
            </button>
          ) : (
            <button className='next' onClick={next} disabled={!selectedOption}>
              Next
            </button>
          )}
        </section>
      </section>
    </div>
  )
}
export default QuizzQuestion
QuizzQuestion.propTypes = {
  dispatch: PropTypes.func.isRequired,
  question: PropTypes.shape({
    id: PropTypes.string.isRequired,
    question: PropTypes.shape({
      text: PropTypes.string.isRequired,
    }).isRequired,
    correctAnswer: PropTypes.string.isRequired,
  }).isRequired,
  score: PropTypes.number.isRequired,
  chosenAnswer: PropTypes.string,
  questionNum: PropTypes.number.isRequired,
  option: PropTypes.arrayOf(PropTypes.string).isRequired,
}
