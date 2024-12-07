import { useState } from "react"
import Time from "./Time"

function QuizzQuestion({ dispatch, question, score, chosenAnswer }) {
  const options = question.incorrectAnswers.concat([question.correctAnswer])
  const correctAnswer = question.correctAnswer

  const [classNames, setClassNames] = useState("")
  //   console.log(chosenAnswer)
  const className = () => {
    if (chosenAnswer == correctAnswer) {
      setClassNames("correct")
    } else {
      setClassNames("wrong")
    }
  }
  const select = (e) => {
    dispatch({ type: "ans", payload: e.target.value })
    className()
    console.log(chosenAnswer == correctAnswer)
  }
  return (
    <div className='quiz ' data-indexs='1'>
      <section className='questions'>
        <h2>Question</h2>
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
          {options.map((option) => (
            <button className={` btn ${classNames}`} onClick={(e) => select(e)} key={option} value={option}>
              {option}
            </button>
          ))}
        </div>
        <section className='nav'>
          {/* <button className='prev'>Prev</button> */}
          {/* <button className='retake hide'> Take Another Quiz </button>  */}
          <Time />
          <button className='next' onClick={() => dispatch({ type: "next" })}>
            Next
          </button>
        </section>
      </section>
    </div>
  )
}
export default QuizzQuestion
