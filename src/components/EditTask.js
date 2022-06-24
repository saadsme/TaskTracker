import React, {useState} from 'react'

const EditTask = ({onEdit, taskID}) => {

    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState('')


    const onSubmit = (e) =>{
        e.preventDefault()
        if(!text) {
            alert("please enter text!")
            return 
        }
        onEdit({taskID, text, day, reminder})
         setDay('')
         setText('')
         setReminder(false)
    }


  return (
    <div>
        <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
            <label>Task</label>
            <input 
                type="text" 
                placeholder='add your task' 
                value={text} 
                onChange={(e) => setText(e.target.value)}
            />
        </div>
        <div className="form-control">
            <label>Day time</label>
            <input 
                type="date" 
                placeholder='add day and time'
                value={day} 
                onChange={(e) => setDay(e.target.value)}
            />
        </div>
        <div className="form-control form-control-check">
            <label>Set Reminder</label>
            <input 
                type="checkbox"
                value={reminder} 
                onChange={(e) => setReminder(e.currentTarget.checked)}
            /> 
        </div>
        <input type="submit" value="save your task" className="btn btn-block"/> 
    </form>

    </div>
  )
}

export default EditTask