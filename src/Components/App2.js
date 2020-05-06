import React from 'react'


class App2 extends React.Component{
  constructor(){
    super()

    this.state = {
      isloggedIn: false
    }
  }

  render(){
    const wordDisplay = this.state.isloggedIn?'in':'out'
    return(
      <div>
        {/* <h1>You're currently logged {wordDisplay}</h1> */}
        <img src='https://www.fillmurray.com/200/100' onMouseOver={()=> alert('mouse over!')}/>
        <button onClick={() =>console.log('clicked!')}>Click Me</button>
      </div>
    )
  }
}
export default App2
