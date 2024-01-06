import { useContext, useEffect, useState } from 'react'

import './App.css'
import TodoForm from './components/TodoForm'
import { TodoContext, TodoProvider } from './context/TodoContext';
import TodoItem from './components/TodoItem';

function App() {
  const [todos, setTodos] = useState([]);


  const addTodo = (todo) => {
    console.log(todo,'tdo')
    setTodos((prev) => [{id:Date.now(),...todo},...prev])
  }

  const updateTodo = (id, todo) => {
    setTodos(prev => prev.map((prevTodo) => (
      prevTodo.id === id ? { ...prevTodo, ...todo } : prevTodo
    )))
  }

  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(prevTodo => prevTodo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos(prev => prev.map(prevTodo => (
      prevTodo.id === id ? { ...prevTodo,completed:!prevTodo.completed } : prevTodo
    )))
  }

  useEffect(()=>{
    const todosList = JSON.parse(localStorage.getItem("todos"));
    if (todosList && todosList.length > 0) {
      setTodos(todosList)
    }
  },[])

  useEffect(()=>{
   localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])
  return (
    <>
      <TodoProvider value={{ addTodo, updateTodo, deleteTodo, toggleComplete }}>
        <div className='container'>
          <h1>Manage Your Todos</h1>
          <div className='formContainer'>
            <TodoForm />
          </div>
          <div className='todoItemContainer'>
            {
              todos && todos.map((todo)=>(
                <TodoItem key={todo.id} todo={todo}/>
              ))
            }
          </div>
        </div>
      </TodoProvider>
    </>
  )
}

export default App
