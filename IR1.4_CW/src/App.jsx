import { useState } from 'react'

const Header = () => {
  return (
    <header>
      <h1>Welcome to Our Company.</h1>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

const EmployeeDetails = ({employee}) => {
     
     return (
      <div>
        <h2>Employee Details</h2>
        <p>Name : {employee.name}</p>
        <p>Postiion : {employee.position}</p>
        <p>Department : {employee.department}</p>
        <p>Email : {employee.email}</p>
      </div>
     )
}

const Footer = () => {
  return (
    <footer>
      <p>&#169; 2025 Company Name. All right reserved.</p>
    </footer>
  )
}

function App() {
  const employee = {
    id: 1,
    name: "John Doe",
    position : "Software Developer",
    department: "Engineering",
    email: "john@email.com"
  }
 
  return (
    <>
    <Header/>
     <main>
       <EmployeeDetails employee = {employee}/>
     </main>
      <Footer/>
    </>
  )
}

export default App
