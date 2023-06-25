import { CompleteTasks, DeleteTask, IncompleteTasks } from './TaskItems'

const Task = ({ index, task, handleCompleteTask, handleDeleteTask }) => (
  <div className='task' key={index}>
    {task.complete
      ? (
        <div className='strike-through' onClick={() => handleCompleteTask(index)}>
          <CompleteTasks text={task.text} />
        </div>
        )
      : (
        <div onClick={() => handleCompleteTask(index)}>
          <IncompleteTasks text={task.text} categorie={task.categorie} />
        </div>
        )}
    <div className='trash-icon' onClick={() => handleDeleteTask(index)}>
      <DeleteTask />
    </div>
  </div>
)

export default Task
