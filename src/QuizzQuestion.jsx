function QuizzQuestion() {
  return (
    <div className='quiz hide' data-indexs='1'>
      <section className='questions'>
        <h2>Question</h2>
        <div className='question'>
          <p>Name the movie that matches the following plot summary: An insurance salesman discovers his whole life is actually a reality TV show.</p>
        </div>
        <p className='quesNumb'>1 / 10</p>
      </section>
      <section className='answers'>
        {/* <!-- div.btns --> */}
        <div className='answers-options'>
          <button className='btn'>
            <input type='radio' name='6.508422101775713' value='The Truman Show' id='rad' />
            <label htmlFor='6.508422101775713' value='The Truman Show'>
              The Truman Show
            </label>
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
          <button className='prev' style='display: block;'>
            Prev
          </button>
          <button className='retake hide'> Take Another Quiz </button>
          <button className='next'>Next</button>
        </section>
      </section>
    </div>
  )
}
export default QuizzQuestion
