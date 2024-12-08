import PropTypes from "prop-types"
function Error({ error }) {
  console.log(error)
  return (
    <div className='error'>
      ⛔ {error} 📛
      <p>
        <svg id='Outlined' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'>
          <g id='Fill'>
            <path fill='white' d='M16.71,22.29l-1.42,1.42L17.59,26H16A10,10,0,0,1,8.93,8.93L7.51,7.51A12,12,0,0,0,16,28h1.59l-2.3,2.29,1.42,1.42L20,28.41a2,2,0,0,0,0-2.82Z' />
            <path fill='white' d='M16,4H14.41l2.3-2.29L15.29.29,12,3.59a2,2,0,0,0,0,2.82l3.29,3.3,1.42-1.42L14.41,6H16a10,10,0,0,1,7.07,17.07l1.42,1.42A12,12,0,0,0,16,4Z' />
          </g>
        </svg>
      </p>
      <button onClick={() => location.reload()}>Try Again</button>
    </div>
  )
}
export default Error
Error.propTypes = {
  error: PropTypes.string,
}
