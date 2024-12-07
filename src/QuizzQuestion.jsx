import Time from "./Time"
function QuizzQuestion({ dispatch, question }) {
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
          <button className='btn' onClick={() => dispatch({ type: "ans" })}>
            The Truman Show
          </button>

          <button className='btn'>
            <input type='radio' name='6.508422101775713' value='The Matrix' id='rad' />
            <label htmlFor='6.508422101775713' value='The Matrix'>
              The Matrix
            </label>
          </button>

          <button className='btn'>
            <input type='radio' name='6.508422101775713' value='Indiana Jones and the Last Crusade' id='rad' />
            <label htmlFor='6.508422101775713' value='Indiana Jones and the Last Crusade'>
              Indiana Jones and the Last Crusade
            </label>
          </button>

          <button className='btn'>
            <input type='radio' name='6.508422101775713' value='The Batman' id='rad' />
            <label htmlFor='6.508422101775713' value='The Batman'>
              The Batman
            </label>
          </button>
        </div>
      </section>
    </div>
  )
}
export default QuizzQuestion
