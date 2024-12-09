import Time from "./Timer"
import Buttons from "./QuizzButtons"
import PropTypes from "prop-types"

function QuizzQuestion({ dispatch, question, chosenAnswer, questionNum, option }) {
  const correctAnswer = question.correctAnswer

  const next = () => {
    correctAnswer == chosenAnswer && dispatch({ type: "score" })
    dispatch({ type: "next" })
    questionNum == 10 && dispatch({ type: "end" })
  }

  const getClassName = (option) => {
    console.log(chosenAnswer)
    if (chosenAnswer == "") return "" // No class if nothing is selected
    return option === correctAnswer ? "correct" : option === chosenAnswer ? "wrong" : ""
  }

  const select = (e) => {
    const selected = e.target.value
    dispatch({ type: "ans", payload: selected })
    e.target.style = "border: 4px solid #c592ff"
  }

  return (
    <div className='quiz ' data-indexs='1'>
      <section className='questions'>
        <h2>Question {questionNum}</h2>

        <div className='question'>
          <p>{question.question.text}</p>
        </div>
      </section>
      <section className='answers'>
        {/* <!-- div.btns --> */}

        <div className='answers-options'>
          <Buttons select={select} selectedOption={chosenAnswer} question={question} option={option} getClassName={getClassName} />
        </div>
        <section className='nav'>
          <Time />

          <button className='next' onClick={next} disabled={!chosenAnswer}>
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
