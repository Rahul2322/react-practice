import React, { useState } from 'react'
import '../App.css'
import { UseTodo } from '../context/TodoContext'

const TodoForm = () => {
  const [todo,setTodo] = useState('')
  const {addTodo} = UseTodo()

  const add = (e)=>{
    e.preventDefault();
    if(!todo) return;
    addTodo({todo,completed:false});
    setTodo('');
  }
  return (
    <form onSubmit={add} className='form'>
    <input 
    type="text" 
    placeholder='Write Todo...'
    value={todo}
    className='form-input'
    onChange={(e)=>setTodo(e.target.value)}
    />
    <button >Add</button>
    </form>
  )
}

export default TodoForm