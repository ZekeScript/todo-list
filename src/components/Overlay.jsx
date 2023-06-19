const Overlay = ({ toggleOverlay, inputValue, handleInputChange, handleAddTask }) => (
  <div className='overlay'>
    <div className='overlay-content'>
      <div className='exit-overlay'>
        <svg onClick={toggleOverlay} xmlns='http://www.w3.org/2000/svg' fill='none' strokeWidth='1.5' stroke='currentColor'>
          <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
        </svg>
      </div>
      <input className='new-task' type='text' placeholder='New Task' value={inputValue} onChange={handleInputChange} />
      <button className='overlay-button' onClick={handleAddTask}>New task
        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor'>
          <path strokeLinecap='round' strokeLinejoin='round' d='M4.5 15.75l7.5-7.5 7.5 7.5' />
        </svg>
      </button>
    </div>
  </div>
)

export default Overlay
