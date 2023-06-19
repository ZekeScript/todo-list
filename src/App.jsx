import { useState } from 'react'
import './App.css'
import Overlay from './components/Overlay'
import PlusButton from './components/PlusButton'
import Task from './components/Task'
import TEMPLATE from './constants'

function App () {
  const [tasks, setTasks] = useState(TEMPLATE)
  const [inputValue, setInputValue] = useState('')
  const [showOverlay, setShowOverlay] = useState(false)

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  function addTask (newTask) {
    setTasks([...tasks, newTask])
  }

  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      addTask({ text: inputValue, complete: false })
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
    newTasks[index].complete = !newTasks[index].complete
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
          <Task
            key={index}
            task={task}
            index={index}
            handleCompleteTask={handleCompleteTask}
            handleDeleteTask={handleDeleteTask}
          />
        ))}
      </section>
      <section>
        <PlusButton toggleOverlay={toggleOverlay} />
      </section>
      <section>
        {showOverlay && (
          <Overlay
            toggleOverlay={toggleOverlay}
            inputValue={inputValue}
            handleInputChange={handleInputChange}
            handleAddTask={handleAddTask}
          />
        )}
      </section>
    </main>
  )
}

export default App
