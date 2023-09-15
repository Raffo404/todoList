import React from 'react'
import classes from './ToDoList.module.css'
import ToDoItem from './ToDoItem'

function ToDoList(props) {
  return (
    <div className={classes.list}>
        <ul>
        {props.todosList.map(item => <li key={item.id}> 
        <ToDoItem 
            removeTodo={props.removeTodo}
            title={item.title}
            description={item.description}
        /> </li>
        )}
        </ul>
    </div>
  )
}

export default ToDoList