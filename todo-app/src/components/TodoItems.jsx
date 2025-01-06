import react from "react";
import reactDom from "react-dom";

const TodoItems = (props)=>{
    return (
        <li className="todoItems">
            <span>
            {props.completed?<></>:<input type = "checkbox"/>}
            <span className="todo-item-text">{props.text}</span>
            </span>
            <p>...</p>            
        </li>
    );
}; 

export default TodoItems