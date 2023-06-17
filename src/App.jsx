import { useState } from 'react'
import './App.css'

const TASKS_TEST = [
  {
    text: 'Daily meeting with team',
    complete: false
  },
  {
    text: 'Pay for rent',
    complete: true
  },
  {
    text: 'Check emails',
    complete: false
  },
  {
    text: 'Lunch with Emma',
    complete: false
  },
  {
    text: 'Meditation',
    complete: false
  }
]

function App () {
  const [tasks, setTasks] = useState([...TASKS_TEST])
  const [inputValue, setInputValue] = useState('')
  const [showOverlay, setShowOverlay] = useState(false)

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, { text: inputValue, complete: false }])
      setInputValue('')
      toggleOverlay()
    }
  }

  const handleDeleteTask = (index) => {
    const newTasks = [...tasks]
    newTasks.splice(index, 1)
    setTasks(newTasks)
  }

  const handleCompleteTask = (index) => {
    const newTasks = [...tasks]
    const newTask = tasks[index]
    newTasks.splice(index, 1, { text: newTask.text, complete: !newTask.complete })
    setTasks(newTasks)
  }

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay)
  }

  return (
    <main>
      <header className='input-field'>
        <h1>Let's Get Things Done!</h1>
      </header>
      <section className='tasks'>
        <h2 className='subtitle'>TASKS</h2>
        {tasks.map((task, index) => (
          <div className='task' key={index}>
            {!task.complete
              ? (
                <div>
                  <svg className='incomplete' onClick={() => handleCompleteTask(index)} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M0 0h24v24H0z' fill='none' /><path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z' /></svg>
                  <div>{task.text}</div>
                </div>
                )
              : (
                <div className='strike-through'>
                  <svg className='complete' onClick={() => handleCompleteTask(index)} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M22,5.18L10.59,16.6l-4.24-4.24l1.41-1.41l2.83,2.83l10-10L22,5.18z M19.79,10.22C19.92,10.79,20,11.39,20,12 c0,4.42-3.58,8-8,8s-8-3.58-8-8c0-4.42,3.58-8,8-8c1.58,0,3.04,0.46,4.28,1.25l1.44-1.44C16.1,2.67,14.13,2,12,2C6.48,2,2,6.48,2,12 c0,5.52,4.48,10,10,10s10-4.48,10-10c0-1.19-0.22-2.33-0.6-3.39L19.79,10.22z' /></svg>
                  <div className='complete-text'>{task.text}</div>
                </div>
                )}
            <i className='trash-icon' onClick={() => handleDeleteTask(index)}>
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0' />
              </svg>
            </i>

          </div>
        ))}
      </section>
      <section>
        <button className='add-task' onClick={toggleOverlay}>
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor'>
            <path strokeLinecap='round' strokeLinejoin='round' d='M12 4.5v15m7.5-7.5h-15' />
          </svg>
        </button>
      </section>
      <section>
        {showOverlay && (
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
        )}
      </section>
    </main>
  )
}

export default App
