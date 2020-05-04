import React from 'react'

function Test(){

  const date = new Date()
  const hours = date.getHours()

  let timeofday

  if(hours>=4 && hours<12){
    timeofday = 'good morning!'
  }else if(hours>=12 && hours<=17){
    timeofday='good afternoon!'
  }else if (hours>15 && hours<20) {
    timeofday = 'good evening!'
  }else {
    timeofday = 'goodnight!'
  }
  return(
    <div>
      {hours}<br />
      <h2 style={{color: '#FF8C00'}}>{timeofday}</h2>
    </div>
  )
}

export default Test
