import { useState } from "react"
import Time from "./Time"
import Buttons from "./Button"
import PropTypes from "prop-types"

function QuizzQuestion({ dispatch, question, score, chosenAnswer, questionNum, option, progress }) {
  //   const options = question.incorrectAnswers.concat(question.correctAnswer)
  const correctAnswer = question.correctAnswer
  console.log(chosenAnswer)

  const [selectedOption, setSelectedOption] = useState("")

  const next = () => {
    correctAnswer == chosenAnswer && dispatch({ type: "score" })
    dispatch({ type: "next" })
    questionNum == 10 && dispatch({ type: "end" })
    console.log(questionNum)
    // dispatch({ type: "next" })
    // dispatch({ type: "questionNum" })
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
        {/* <div className='score'>
          <div className='bar'>
            <div className='progress' style={{ width: `${progress()}%`, transition: "width 0.3s ease" }}></div>
          </div>
          <h3>{score}/10</h3>
        </div> */}
        <div className='question'>
          <p>{question.question.text}</p>
        </div>
      </section>
      <section className='answers'>
        {/* <!-- div.btns --> */}

        <div className='answers-options'>
          {/* {option.map((option) => (
            <button className={`btn ${getClassName(option)}`} onClick={select} key={`${question.id}-${option}`} value={option} disabled={!!selectedOption}>
              {option}
            </button>
          ))} */}
          <Buttons select={select} selectedOption={selectedOption} question={question} option={option} getClassName={getClassName} />
        </div>
        <section className='nav'>
          {/* <button className='prev'>Prev</button> */}
          <Time />

          <button className='next' onClick={next} disabled={!selectedOption}>
            Next
          </button>
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
