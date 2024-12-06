import Time from "./Time"
function QuizzQuestion({ dispatch }) {
  return (
    <div className='quiz ' data-indexs='1'>
      <section className='questions'>
        <h2>Question</h2>
        <div className='question'>
          <p>Name the movie that matches the following plot summary: An insurance salesman discovers his whole life is actually a reality TV show.</p>
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
        <section className='nav'>
          {/* <button className='prev'>Prev</button>
          <button className='retake hide'> Take Another Quiz </button> */}
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
