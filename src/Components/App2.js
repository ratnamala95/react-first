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
        <h1>You're currently logged {wordDisplay}</h1>
      </div>
    )
  }
}
export default App2
