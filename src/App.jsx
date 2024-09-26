import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
import { useEffect, useState } from "react"

function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState('');

function handleAddTodos(newTodo) {
  const newTodoList = [...todos, newTodo]
  persistData(newTodoList)
  setTodos(newTodoList)
}

function handleEditTodo(index) {
  const valueTobeEdited = todos[index];
  setTodoValue(valueTobeEdited)
  handleDeleteTodo(index)
}

function handleDeleteTodo(index) {
  const newTodoList = todos.filter((_, todoIndex) => {
    return todoIndex != index
  })
  persistData(newTodoList)
  setTodos(newTodoList)
}

useEffect(() => {
  if (!localStorage) {
    return
  }

  let localTodos = localStorage.getItem('todos')
  if (!localTodos) {
    return
  }

  localTodos = JSON.parse(localTodos).todos
  setTodos(localTodos);
}, [])

function persistData(newList) {
  localStorage.setItem('todos', JSON.stringify({todos:newList}))
}

  return (
    <>
      <TodoInput 
        todoValue = {todoValue}
        setTodoValue = {setTodoValue}
        handleAddTodos = {handleAddTodos} 
      />
      <TodoList 
        handleEditTodo={handleEditTodo} 
        handleDeleteTodo = {handleDeleteTodo}
        todos = {todos} 
      />
    </>
  )
}

export default App
