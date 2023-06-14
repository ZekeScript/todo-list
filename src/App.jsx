import { useState } from 'react'
import './App.css'

function App () {
  const [tasks, setTasks] = useState([])
  const [inputValue, setInputValue] = useState('')

  const handleInput = (e = document.getElementById('task-input')) => {
    setInputValue(e.target.value)
  }

  const handleButton = () => {
    setTasks([...tasks, inputValue])
  }

  return (
    <>
      <h1>ToDo List</h1>
      {tasks.map((task, index) => {
        return (
          <div className='task card' key={index}>
            {task}
          </div>
        )
      })}
      <section className='input-field'>
        <input id='task-input' placeholder='New Task' value={inputValue} onChange={handleInput} />
        <button onClick={handleButton}>+</button>
      </section>
    </>
  )
}

export default App
