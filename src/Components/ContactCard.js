import React from 'react'
import Contact from './Contact'


function ContactCard(){

  return(

    <div>
      <Contact image='http://placekitten.com/200/100' number='9874651230' email='kitty@example.com'/>
      <Contact image='http://placekitten.com/400/200' number='9874651230' email='kitty@example.com'/>
      <Contact image='http://placekitten.com/400/300' number='9874651230' email='kitty@example.com'/>
      <Contact image='http://placekitten.com/300/200' number='9874651230' email='kitty@example.com'/>
    </div>
  )
}

export default ContactCard
