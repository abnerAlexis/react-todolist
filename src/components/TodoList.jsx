import React from 'react'
import TodoCard from './TodoCard';

function TodoList(props) {
  const {todos} = props;
  
  return (
    <ul className='main'>
      {todos.map((todo, todoIndex) => {
        return (
          <TodoCard 
            key={todoIndex}
            index = {todoIndex}
            {...props}
          >
            <p>{todo}</p>
          </TodoCard>
        )
      })}
    </ul>
  )
}

export default TodoList