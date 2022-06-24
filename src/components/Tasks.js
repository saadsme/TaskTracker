import Task from './Task'


const Tasks = ({tasks,onDelete, onToggle, onEdit, showEdit, addTask}) => {
   


  return (
    <>{
        tasks.map((task) => (
           <Task 
              key={task.id} 
              task={task} 
              onDelete={onDelete} 
              onToggle={onToggle} 
              addTask={addTask} 
              onEdit={onEdit} 
              showEdit = {showEdit}
              taskID = {task.id}
            /> 
        )
        )
        } 
    </>
  )
}

export default Tasks 