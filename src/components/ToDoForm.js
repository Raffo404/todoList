import React, {useState} from 'react'
import classes from './ToDoForm.module.css'

function ToDoForm(props) {
    const [inputTitle, setInputTitle] = useState('');
    const [inputDescription, setInputDescription] = useState('');

    const changeTitleHandler = (event) => {
        setInputTitle((prevState) => prevState + event.target.value)
    }

    const changeDescriptionHandler = (event) => {
        setInputDescription((prevState) => prevState + event.target.value)
    }

    const addItemHandler = (event) => {
        event.preventDefault();
        const newItem = {
            id: Math.random() * 15,
            title: inputTitle,
            description: inputDescription
        }
        props.addTodo(newItem);
    }

  return (
    <div className={classes.formContainer}>
    <form onSubmit={addItemHandler} className={classes.form}> 
        <label htmlFor='title'> new Item's title </label>
        <input type="text" id="title" value={inputTitle} required onChange={changeTitleHandler}/>
        <label htmlFor='description'> new Item's description</label>
        <input type="text" id="description" required value={inputDescription} onChange={changeDescriptionHandler}/>
        <button type="submit"> Add item  </button>
    </form>
    </div>
  )
}

export default ToDoForm