import  PropTypes  from "prop-types"
import Button from "./Button"
import  { FaMinus, FaPlus } from 'react-icons/fa'

const Header = ({title, onAdd, showAdd, onEdit, showEdit}) => {
   

  return (
    <header className="header">
        <h1>{title}</h1>
        <div>
        {/* <Button color={showEdit ? 'grey' : 'red'} text={showAdd ? "Collapse" : "Edit"} onClick={onEdit}/> */}
        <Button color={showAdd ? 'grey' : 'green'} text={showAdd ? <FaMinus style={{color: "black", cursor: "pointer", background: "grey", }}
        /> : <FaPlus style={{color: "black", cursor: "pointer", background: "green", }}
        />} onClick={onAdd}/>
        </div>
    </header>
  )
}

Header.defaultProps = {
    title: "Task Tracker",
}

Header.propTypes ={
    title: PropTypes.string,
}

export default Header