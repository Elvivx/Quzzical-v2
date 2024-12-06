import QuizzQuestion from "./QuizzQuestion"
function Quizz() {
  return (
    <main>
      <section>
        <h1 className='title'>Quizzical</h1>
        <section className='quizz-container'>
          <QuizzQuestion />
        </section>
      </section>
    </main>
  )
}
export default Quizz
