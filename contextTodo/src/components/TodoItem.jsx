import React, { useState } from 'react'
import { FiEdit } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { FaFolder } from "react-icons/fa6";
import { UseTodo } from '../context/TodoContext';
const TodoItem = ({ todo }) => {
    const [todoMsg, setTodoMsg] = useState(todo.todo)
    const [isEditable, setIsEditable] = useState(false)
    const { toggleComplete, updateTodo, deleteTodo } = UseTodo();

    const editTodo = () => {

        updateTodo(todo.id, { ...todo, todo: todoMsg })
        setIsEditable(false)
    }

    const toggleCompleted = ()=>{
        toggleComplete(todo.id)
    }
    return (
        <div className = {`todoItem ${todo.completed ? 'complete':'incomplete'}`}>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            <input
                style={{textDecoration: todo.completed ?' line-through':""}}
                type="text"
                value={todoMsg}
                disabled={!isEditable}
                onChange={(e) => setTodoMsg(e.target.value)}
            />

            <button className='edit' onClick={() => {
                if (todo.completed) return

                if (isEditable) {
                    editTodo();
                } else {
                    setIsEditable(prev => !prev)
                }
            }}>
                {isEditable ? <FiEdit /> : <FaFolder />}
            </button>
            <button className='delete' onClick={() => deleteTodo(todo.id)}><RxCross2 /></button>
        </div>
    )
}

export default TodoItem