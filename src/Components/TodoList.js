import React from 'react'
import TodoItem from './TodoItem'
import todoData from '../json/todoData'
import '../css/style.css'


class TodoList extends React.Component{
  constructor(){
    super()

    this.state = {
      tododata: todoData
    }
  }
  render(){
    const todoComponents = this.state.tododata.map(function(data){
      return(
        <TodoItem
          key={data.id}
          item={data}
        />
      )
    })
    return(
      <div className='todo-list'>
        {todoComponents}
      </div>
    )
  }
}
export default TodoList
