import React from 'react'
import TodoItem from './TodoItem'
import todoData from '../json/todoData'
import '../css/style.css'


// function TodoList(){
//
//   console.log(todoData);
//   const todo = todoData.map(function(data){
//     return(
//       <TodoItem
//         key={data.id}
//         item={data}
//       />
//     )
//   })
//   return(
//     <div className='todo-list'>
//       {todo}
//     </div>
//   )
// }


class TodoList extends React.Component{
  render(){
    const todoComponents = todoData.map(function(data){
      return(
        <TodoItem
          key={data.id}
          item={data}
        />
      )
    })
    return(
      <div>
        {todoComponents}
      </div>
    )
  }
}
export default TodoList
