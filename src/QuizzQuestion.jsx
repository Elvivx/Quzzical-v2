import Time from "./Time"
import { useState } from "react"
function QuizzQuestion({ dispatch, question }) {
  const options = question.incorrectAnswers.concat([question.correctAnswer])
  const answer = question.correctAnswer
  const select = () => {
    dispatch({ type: "SELECT", payload: answer })
  }
  console.log(options)
  return (
    <div className='quiz ' data-indexs='1'>
      <section className='questions'>
        <h2>Question</h2>
        <div className='question'>
          <p>{question.question.text}</p>
        </div>
      </section>
      <section className='answers'>
        {/* <!-- div.btns --> */}

        <div className='answers-options'>
          <button className='btn' onClick={() => dispatch({ type: "ans", payload: e.target.value })}>
            The Truman Show
          </button>
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
