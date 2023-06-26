import { useState } from 'react'
import './App.css'
import { CategoriesSection } from './components/CategoriesSection'
import Overlay from './components/Overlay'
import PlusButton from './components/PlusButton'
import Task from './components/Task'
import { CATEGORIES, FILTER_OPTIONS, TEMPLATE } from './constants'

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
      <section>
        <h2 className='subtitle'>CATEGORIES</h2>
        <div className='categorie'>
          {CATEGORIES.map((categorie, index) => (
            <CategoriesSection
              key={index}
              index={index}
              tasks={tasks}
              categorie={categorie}
            />
          ))}
        </div>
      </section>
      {/** Todo:
       * - Separate the logic behind the filter into a component 👇 */}
      <section className='tasks'>
        <div className='subtitle-section'>
          <h2 className='subtitle'>TASKS</h2>
          <select className='subtitle-section-select' aria-label='Select an option' onChange={handleSelectFilter}>
            {FILTER_OPTIONS.map((option, index) => (
              <option className='select-overlay-option' key={index}>{option}</option>
            ))}
          </select>
        </div>
        {filterValue === 'Both'
          ? (
              tasks.map((task, index) => (
                <Task
                  key={index}
                  task={task}
                  index={index}
                  handleCompleteTask={handleCompleteTask}
                  handleDeleteTask={handleDeleteTask}
                />
              )))
          : (
              tasks.map((task, index) => (
                task.categorie === filterValue &&
                  <Task
                    key={index}
                    task={task}
                    index={index}
                    handleCompleteTask={handleCompleteTask}
                    handleDeleteTask={handleDeleteTask}
                  />
              )))}
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
            handleSelectChange={handleSelectChange}
          />
        )}
      </section>
    </main>
  )
}

export default App
