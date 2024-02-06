import { useEffect, useRef, useState } from 'react'
import './CSS/Todo.css' 
import ToDoItems from './ToDoItems';

let count = 0;
const ToDo = () => {
    const [todos, setTodos] = useState([]);
    const inputRef = useRef(null);

    const add = () => {
        setTodos([...todos, {no: count++, text:inputRef.current.value, display:""}]);
        inputRef.current.value = "";
        localStorage.setItem('todos_count', count);
    }

    useEffect(() => {
        setTodos(JSON.parse(localStorage.getItem('todos')));
        count = localStorage.getItem('todos_count');
    }, []);

    useEffect(() => {
        setTimeout(() => {
            console.log(todos);
            localStorage.setItem('todos', JSON.stringify(todos))
        }, 100);
    }, [todos]);

    
  return (
    <div className='todo'>
        <div className="todo-header">ToDo List</div>
        <div className="todo-add">
            <input ref={inputRef} type="text" name="" id="" className='todo-input' placeholder='Add your task'/>
            <div onClick={() => {add();}} className="todo-add-btn">ADD</div>
        </div>
        <div className="todo-list">
            {todos.map((item, index)=> {
                return <ToDoItems key={index} setTodos={setTodos} no={item.no} display={item.display} text={item.text} />
            })}
        </div>
    </div>
  )
}

export default ToDo
