import { useState } from 'react'
import './App.css'
import { CategorySection } from './components/CategorieSection'
import Overlay from './components/Overlay'
import PlusButton from './components/PlusButton'
import TaskSection from './components/TaskSection'
import { TEMPLATE } from './constants'

function App () {
  const [tasks, setTasks] = useState(() => {
    const tasksFromStorage = window.localStorage.getItem('tasks')
    return tasksFromStorage ? JSON.parse(tasksFromStorage) : TEMPLATE
  })
  const [inputValue, setInputValue] = useState('')
  const [selectValue, setSelectValue] = useState('Personal')
  const [showOverlay, setShowOverlay] = useState(false)
  const [filterValue, setFilterValue] = useState('Both')

  function saveToDo () {
    window.localStorage.setItem('tasks', JSON.stringify(tasks))
  }
  saveToDo()

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  const handleSelectFilter = (event) => {
    setFilterValue(event.target.value)
  }

  const handleSelectChange = (event) => {
    setSelectValue(event.target.value)
  }

  function addTask (newTask) {
    setTasks([...tasks, newTask])
  }

  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      addTask({ text: inputValue, complete: false, categorie: selectValue })
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
      <CategorySection tasks={tasks} />
      <TaskSection
        handleSelectFilter={handleSelectFilter}
        filterValue={filterValue}
        tasks={tasks}
        handleCompleteTask={handleCompleteTask}
        handleDeleteTask={handleDeleteTask}
      />
      <PlusButton toggleOverlay={toggleOverlay} />
      {showOverlay && (
        <Overlay
          toggleOverlay={toggleOverlay}
          inputValue={inputValue}
          handleInputChange={handleInputChange}
          handleAddTask={handleAddTask}
          handleSelectChange={handleSelectChange}
        />
      )}
    </main>
  )
}

export default App
