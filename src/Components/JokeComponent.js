import React from 'react'

function JokeComponent(props){
  return(
    <div>
      <h3 style={{display: !props.question && "none"}}>Question: {props.question}</h3>
      <h3 style={{color: !props.question && '#888888'}}>Ans: {props.punchline}</h3>
      <hr />
    </div>
  )
}
export default JokeComponent
