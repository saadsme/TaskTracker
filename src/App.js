import Header from './components/Header.js'
import Tasks from './components/Tasks.js';
import { useState } from "react"
import AddTask from './components/AddTask.js';


function App() {

  const[tasks,setTasks]=useState([
    {
      "id": 1,
      "text": "Doctors Appointment",
      "day": "Feb 5th at 2:30pm",
      "reminder": true
    },
    {
      "id": 2,
      "text": "Meeting at School",
      "day": "Feb 6th at 1:30pm",
      "reminder": true
    }
  ])
  const [showAddTask, setShowAddTask] = useState(false);
  const [showEditTask, setShowEditTask] = useState(false);
  
  //Delete A Task
  const deleteTask = (id) =>{
    setTasks(tasks.filter((task) => task.id !== id))
    console.log('deleted... new array is: ', tasks)
  }

  //Toggle a Reminder
  const ToggleReminder= (id) =>{
   //console.log(id)
   //console.log('updates tasks array', tasks)
   setTasks(tasks.map((task)=> {
    if(task.id===id) return { ...task,reminder: !task.reminder }
    else return task;
   }))
  }


  //Add a task:
  const addTask= (task) => {
      const newID = tasks.length + 1
      const newTask = {newID, ...task}
      newTask.id = newID
      setTasks([...tasks, newTask])
      
  }

 
  //Edit a task:
  const editTask2 = ({taskID, text, day, reminder}) => {
    const newText = text;
    const newDay = day;
    const newReminder = reminder;
    const newTask = {id: taskID, text: newText, day: newDay, reminder: newReminder}

    console.log('task to add is ', newTask)
  
    setTasks((tasks) => {
      return {
        tasks: [...tasks,deleteTask(newTask.id)]
      };
    });

    console.log('tasks after deleting: ', tasks)
    
    // console.log('deleting task with ID ' , taskID)
    // deleteTask(taskID)
    // console.log('deleted! new array is: ', tasks)
    // console.log('adding new task ', newTask)
    // addTask(newTask)
     //console.log('added! new array is: ', tasks)
    
    
    
  //   setTasks(tasks.map((task)=> {
  //     if(task.id===id) return { id: id, text:text, date:date, reminder:reminder }
  //     else return task;
  //  }))

  }
  
  return (
    <div className="container">
      <Header 
        onAdd = {()=>setShowAddTask(!showAddTask)} 
        showAdd = {showAddTask} 
        
      />
      {showAddTask ? <AddTask onAdd={addTask}/> : ''} 
      { tasks.length>0 ? 
      <Tasks 
          tasks={tasks} 
          onDelete = {deleteTask} 
          onToggle={ToggleReminder} 
          addTask = {addTask} 
          onEdit = {editTask2} 
          showEdit={showEditTask} 
      /> : 'You are done with all your tasks!'}
      
    </div>
  );
}

export default App;
