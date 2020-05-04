import React from 'react'
import JokeComponent from './JokeComponent'
import jokes from '../json/jokes'


function Jokes(){

  const jokesData = jokes.map(function(joke){
    return(
      <JokeComponent
        key={joke.id}
        question={joke.question}
        punchline={joke.punchline}
      />
    )
  })

  return(
    <div>
      {jokesData}
    </div>
  )
}

export default Jokes
