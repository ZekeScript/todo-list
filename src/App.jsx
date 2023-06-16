import { useState } from 'react'
import './App.css'

function App () {
  const [tasks, setTasks] = useState([])
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
        <input type='text' placeholder='New Task' value={inputValue} onChange={handleInputChange} />
        <button onClick={handleAddTask}>+</button>
      </header>
      <section className='tasks'>
        {tasks.map((task, index) => (
          <div className='task card' key={index}>
            {task}
            <button className='task' onClick={() => handleDeleteTask(index)}>×</button>
          </div>
        ))}
      </section>
    </main>
  )
}

export default App
