export const CategoriesSection = ({ index, tasks, categorie }) => (
  <div className='task-categorie' key={index}>
    <div className='task-categorie-count'>
      {tasks.filter(task => task.categorie === categorie).length + ' Tasks'}
    </div>
    <div>
      {categorie}
      {categorie === 'Business'
        ? (
          <div className='task-categorie-bar'>
            <div style={{
              backgroundColor: '#EB06FF',
              height: '100%',
              width: `${tasks.filter(task => task.categorie === categorie).length * 100 / tasks.length}%`,
              transition: '300ms'
            }}
            />
          </div>
          )
        : (
          <div className='task-categorie-bar'>
            <div style={{
              backgroundColor: '#227BFF',
              height: '100%',
              width: `${tasks.filter(task => task.categorie === categorie).length * 100 / tasks.length}%`,
              transition: '300ms'
            }}
            />
          </div>
          )}
    </div>
  </div>
)
