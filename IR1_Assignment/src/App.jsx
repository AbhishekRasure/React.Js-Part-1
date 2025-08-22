import { useState } from 'react'


const ProductPage = ( {inStock} ) => {
   return (
    <div>
      <div>
      <h1>Product Page</h1>
      <h4>iPhone 15 Pro</h4>
      <img src = "https://viaplaceholder.com/150"/>
      <p><b>Price :</b>$499.99</p>
      <p><b>Color :</b>Midnight Green</p>
      <p><b>Description :</b>The latest flagship smartphone from Apple with cutting-edge features and stunning design.</p>
      <p>{inStock ? <b>InStock</b> : <b>Out of Stock</b>}</p>
    </div>
    
    <footer>
      <p>&#169; {"2024 Apple Inc"}</p>
    </footer>
    </div>
   )
}

function App() {
  
  return (
    <>
      <ProductPage inStock = {true}/>
    </>
  )
}

export default App
