import React from 'react'
import {FaTimes, FaPen} from 'react-icons/fa'
import { useState } from 'react'
import EditTask from './EditTask';

const Task = ({task,onDelete, onToggle,onEdit, showEdit, taskID}) => {
  const [showEditTask, setShowEditTask] = useState(false);
  
  

  return (
    <div >
        <div className = {`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick = {()=> onToggle(task.id)}>
            <h3> {task.text} 
            <div className="icons">
              <FaTimes 
                style={{color: "red", cursor: "pointer"}} 
                onClick={() => onDelete(task.id)} 
              />
              {/* <FaPen 
                style={{color: "red", cursor: "pointer"}} 
                //onClick={() => onEdit(task.id, task.text, task.date, task.reminder)} 
                onClick = { () =>{
                  setShowEditTask(!showEditTask)
                  
                } }
              /> */}
              </div>
                
                
            </h3>
            <p> <small>{task.day}</small>
            </p> 
        </div>
        {showEditTask? <EditTask onEdit={onEdit} taskID ={taskID}/> : ''}
        
    </div>
  )
}

export default Task