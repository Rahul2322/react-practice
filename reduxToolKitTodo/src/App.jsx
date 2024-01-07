
import './App.css'
import AddTodo from './components/AddTodo'
import { useSelector } from 'react-redux'
import Todo from './components/Todo'
function App() {


  return (
    <>
    <h1>Redux ToolKit</h1>
    <AddTodo/>
    <Todo/>
    </>
  )
}

export default App
