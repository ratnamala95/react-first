import React from 'react'
import TodoItem from './TodoItem'
import '../css/style.css'


function TodoList(){
  return(
    <div className='todo-list'>
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  )
}

export default TodoList
