import React from 'react'

function MainContent(){
  return(
    <div>
      <li><input type='checkbox' /><label>Item 1</label></li>
    </div>
  )
}
export default MainContent


// className is an underlying javaScript DOM api property
// document.getElementById('id').className/classList += 'name of new class'
// className can only be applied to react elemens and not components
