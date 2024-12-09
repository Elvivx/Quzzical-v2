function Buttons({ option, select, getClassName, question, selectedOption }) {
  console.log("shit")
  return option.map((option) => (
    <button className={`btn ${getClassName(option)}`} onClick={select} key={`${question.id}-${option}`} value={option} disabled={!!selectedOption}>
      {option}
    </button>
  ))
}
export default Buttons
