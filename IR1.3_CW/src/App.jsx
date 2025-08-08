import { useState } from 'react'


const Greeting = (props) => {
    return <h1>Hello, {props.name}</h1>
}

const UserDetails = (props) => {
  // console.log(props)
    return(
      <div>
      <h1>User Details</h1>
        <p>Name : {props.name}</p>
        <p>Age : {props.age}</p>
        <p>Country : {props.country}</p>
      </div>
    )
}

const WeatherInfo = (props) => {
  return (
    <div>
      <h1>Weather Information</h1>
      <p>Temperature : {props.temperature} degree celcius</p>
      <p>Condition : {props.condition}</p>
    </div>
  )
}

const UserAvatar = (props) => {
  return (
    <div>
      <h1>User Avatar</h1>
      <img src = {props.img} alt= {props.placeholder}/>
    </div>
  )
}

function App() {
 

  return (
    <>
      <Greeting name= "John"/>
      <UserDetails name = "Bob" age = {20} country = "India"/>
      <WeatherInfo temperature = {20} condition = "Sunny"/>
      <UserAvatar img = "https://via.placeholder.com/150" alt="placeholder"/>
    </>
  )
}

export default App
