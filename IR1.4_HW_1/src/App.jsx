import { useState } from 'react'

const Header = () => {
  return (
    <div>
      <h1>Welcome to Our Website</h1>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

const SmartPhoneDetails = ({smartPhoneDetails}) => {
  return (
    <div>
      <p>Category : {smartPhoneDetails.category}</p>
      <p>Price : {smartPhoneDetails.price}</p>
      <p>Stock : {smartPhoneDetails.stock}</p>
      <p>&#169; 2025 Company Name. All right reserved.</p>
    </div>
  )
}

function App() {
  const smartPhoneDetails = {
    category: "Electronics",
    price: 799.99,
    stock: 100
  }

  return (
    <>
       <Header/>
       <h2>Smartphone</h2>
       <SmartPhoneDetails smartPhoneDetails = {smartPhoneDetails}/>
    </>
  )
}

export default App
