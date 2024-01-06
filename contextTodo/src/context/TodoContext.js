import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todo:{
        id:new Date(),
        todo:"",
        completed:false
    },
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}

})

export const UseTodo  = ()=>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider

