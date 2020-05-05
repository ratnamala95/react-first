import React from 'react'

class App2 extends React.Component{
  render(){
    return(
      <div>
        <Header username='Ridhi'/>
        <Greeting />
      </div>
    )
  }
}

class Header extends React.Component{
  render(){
    return(
      <header>
        <p>Welcome, {this.props.username}</p>
      </header>
    )
  }
}

class Greeting extends React.Component{
  render(){
    const date = new Date()
    const hour = date.getHours()
    let timeofday

    if(hour>=4 && hour<12){
      timeofday = 'morning'
    }else if (hour>=12 && hour<17) {
      timeofday = 'afternoon'
    }else if(hour>=17 && hour<21) {
      timeofday='evening'
    }else {
      timeofday='night'
    }

    return(
      <div>
        <h4>Good {timeofday}! Sir/Ma'am. . </h4>
      </div>
    )
  }
}
export default App2
