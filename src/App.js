import './App.css';
import { useState, useEffect} from 'react'
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';

const initialStateItems = {
items: [
  {
    id: Math.random(0,10)*10,
    title: "toDoItem-1",
    description: "first to-do-item"
  },
  {
    id: Math.random(0,10)*10,
    title: "toDoItem-2",
    description: "second to-do-item"
  },
  {
    id: Math.random(0,10)*10,
    title: "toDoItem-3",
    description: "third to-do-item"
  }
]
}

function App() {
  const [todos,setTodos] = useState(initialStateItems.items);
  
  useEffect ( () => {
    setTodos( JSON.parse(localStorage.getItem('todos')).items);
  },[]);

  const addTodo = (todo) => {
    localStorage.setItem('todos',JSON.stringify({ items: [...todos, todo]}));
    setTodos( prevState => [...prevState, todo]);
  }

  const removeTodo = (text) => {
    const newLocalItems = todos.filter( todo => todo.title.trim() !== text);
    localStorage.setItem('todos', JSON.stringify({ items: newLocalItems}));
    setTodos(newLocalItems);
  }
  return (
    <div className="App">
        <ToDoList todosList={todos} removeTodo={removeTodo}/>
        <ToDoForm addTodo={addTodo}/>
    </div>
  );
}

export default App;
