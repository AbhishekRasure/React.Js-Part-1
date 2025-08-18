import { useState } from 'react'

const GenerateGreeting = () => {
  const name = "John"
  const getName = (name) => {
    return `Hello ${name}`
  }

  return <h1>{getName(name)}</h1>

}

const CalculateArea = () => {
  const length = 10
  const width = 5
  const areaOfRectangle = () => {
    return length * width
  }

  return <h3>Rectangle Area : {areaOfRectangle()}</h3>
}

const CalculatePerimeter = () => {
  const length = 10
  const width = 5
  const perimeterOfRectangle = (length, width) => {
    return (length + width) * 2
  }

  return <h3>Rectangle Perimeter : {perimeterOfRectangle(length, width)}</h3>
}

const GenrateMessage = () => {
  const getHours = () => {
    const currentDate = new Date().getHours()
    if(currentDate < 12){
      return "Good Morning!"
    } else if(currentDate < 18) {
      return "Good Afternoon!"
    } else{
      return "Good Evening!"
    }
    
  }

  return <h1>{getHours()}</h1>
}

const CalculateVolume = () => {
  const radius = 3
  const height = 5
  const pi = 3.14
  const getVolume = () => {
     return pi * radius ** 2 * height
  }

  return <h3>Volume of Cylinder : {getVolume()}</h3>
}

function App() {

  return (
    <>
      <GenerateGreeting/>
      <CalculateArea/>
      <CalculatePerimeter/>
      <GenrateMessage/>
      <CalculateVolume/>
      
    </>
  )
}

export default App
