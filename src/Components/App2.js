import React from 'react'


class App2 extends React.Component{
  constructor(){
    super()

    this.state = {
      isloggedIn: false,
      count: 0
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.setState((prevState)=>{
      return{
        count: prevState.count + 1
      }
    })
  }

  render(){
    const wordDisplay = this.state.isloggedIn?'in':'out'
    return(
      <div>
        {/* <h1>You're currently logged {wordDisplay}</h1> */}
        {/* <img src='https://www.fillmurray.com/200/100' onMouseOver={()=> alert('mouse over!')}/> */}
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    )
  }
}
export default App2
