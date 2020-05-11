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

    this.handleChange = this.handleChange.bind(this)
  }


  handleChange(id){
    this.setState(prevState=>{
      const updatedState = prevState.tododata.map(todo => {
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo
      })
      return{
        todos: updatedState
      }
    })
  }

  render(){
    const todoComponents = this.state.tododata.map(data => {
      return(
        <TodoItem
          key={data.id}
          item={data}
          handleChange={this.handleChange}
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
