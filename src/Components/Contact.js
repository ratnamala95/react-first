import React from 'react'

function Contact(props){

  return(
    <div>
      <img src={props.image} alt='image'/><br />
      <p>ph number: {props.number}</p>
      <p>email: {props.email}</p><br />
    </div>
  )
}

export default Contact
