import { FILTER_OPTIONS } from '../constants'
import Task from './Task'

const TaskSection = ({ handleSelectFilter, filterValue, tasks, handleCompleteTask, handleDeleteTask }) => (
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
)

export default TaskSection
