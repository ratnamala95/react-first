import React from 'react'

function Product(props){
  return(
    <div>
      <h2>{props.product.product}</h2>
      <p>{props.product.price.toLocaleString("en-US",{style: "currency", currency:"USD"})}
         -{props.product.description}</p>
      <br />
    </div>
  )
}
export default Product
