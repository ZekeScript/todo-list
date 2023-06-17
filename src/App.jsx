import { useState } from 'react'
import './App.css'

function App () {
  const [tasks, setTasks] = useState(['Daily meeting with team', 'Pay for rent', 'Check emails', 'Lunch with Emma', 'Meditation'])
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, inputValue])
      setInputValue('')
    }
  }

  const handleDeleteTask = (index) => {
    const newTasks = [...tasks]
    newTasks.splice(index, 1)
    setTasks(newTasks)
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
            <div>
              <span className='complete'>〇</span>{task}
            </div>
            <i className='trash-icon' onClick={() => handleDeleteTask(index)}>
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='w-6 h-6'>
                <path stroke-linecap='round' stroke-linejoin='round' d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0' />
              </svg>
            </i>

          </div>
        ))}
      </section>
      <section>
        <button className='add-task' onClick={handleAddTask}>
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='w-6 h-6'>
            <path stroke-linecap='round' stroke-linejoin='round' d='M12 4.5v15m7.5-7.5h-15' />
          </svg>
        </button>
      </section>
      <section>
        {/* <input type='text' placeholder='New Task' value={inputValue} onChange={handleInputChange} /> */}
      </section>
    </main>
  )
}

export default App
