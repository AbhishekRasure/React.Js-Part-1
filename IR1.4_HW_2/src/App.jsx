import { useState } from 'react'


const Header = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href = "/">Home</a>
          </li>
          <li>
            <a href = "/">About</a>
          </li>
          <li>
            <a href = "/">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

const Blog = ({blogDetails}) => {
  return (
    <div>
      <p>Author : {blogDetails.author}</p>
      <p>Date : {blogDetails.date}</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
    </div>
  )
}

const Footer = () => {
  return (
    <footer>
      <p>&#169; 2025 Our Blog. All right reserved.</p>
    </footer>
  )
}

function App() {

  const blogDetails = {
     author: "Jane Doe",
     date: "1 March 2024" 
  }

  return (
    <>
      <h1>Welcome to Our Website</h1>
      <Header/>
      <h2>The Importance of Learning React</h2>
      <Blog blogDetails = {blogDetails}/>
      <Footer/>
    </>
  )
}

export default App
