import Time from "./Time"
import { useState } from "react"
function QuizzQuestion({ dispatch, question, score, answer }) {
  const options = question.incorrectAnswers.concat([question.correctAnswer])
  const correctAnswer = question.correctAnswer
  //   const select = (e) => {
  //     // dispatch({ type: "SELECT", payload: answer })
  //     e.target.value === answer ? dispatch({ type: "answer" }) value)
  //   }
  console.log(options, answer)
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
            <button className={` btn ${answer === correctAnswer ? "correct" : ""} `} onClick={(e) => dispatch({ type: "answer", payload: e.target.value })} key={option} value={option}>
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
