import Time from "./Time"
function QuizzNav({ next, selectedOption }) {
  return (
    <section className='nav'>
      <Time />
      <button className='next' onClick={next} disabled={!selectedOption}>
        Next
      </button>
    </section>
  )
}
export default QuizzNav
