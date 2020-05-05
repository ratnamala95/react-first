import React from 'react'
import TodoList from './TodoList'
// import Product from './Product'
// import productsData from '../json/productsData'

function App(){

  // const products = productsData.map(function(product){
  //   return(
  //     <Product
  //       key={product.id}
  //       product={product}
  //      />
  //   )
  // })
  return(
    <div>
      {/* {products} */}
      <TodoList />
    </div>
  )
}

export default App
