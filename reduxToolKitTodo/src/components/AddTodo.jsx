import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

const AddTodo = () => {
 const [todoMsg,setTodoMsg] = useState('');
 const dispatch = useDispatch();
 const submitHandler = (e)=>{
    e.preventDefault();
    dispatch(addTodo(todoMsg))
    setTodoMsg('')
 }
  return (
    <form onSubmit={submitHandler}>
        <input 
        type="text"
        placeholder='Add Todo...'
        value = {todoMsg}
        onChange={(e)=>setTodoMsg(e.target.value)}
         />
        <button>Add</button>
    </form>
  )
}

export default AddTodo