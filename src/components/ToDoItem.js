import React from 'react'
import classes from './ToDoItem.module.css'


function ToDoItem(props) {
    
    const removeHandler = () => {
        props.removeTodo(props.title.trim());
    }
   
    
  return (
    <div className={classes.item} >
        <section className={classes.title}> 
            <span> Title: </span>
            <span> {props.title} </span>
        </section>
        <section className={classes.description}> 
            <span> Description: </span>
            <span> {props.description} </span>
        </section>
        <button className={classes.action} onClick={removeHandler}> Rimuovi </button>
    </div>
  )
}

export default ToDoItem