import { useState } from 'react'


const ArrayOperations = () => {
  const numbers = [1,2,3,4,5]
  
  const sum = numbers.reduce((acc, curr) => {
     acc = acc + curr
     return acc
  }, 0)

  const average = sum / numbers.length
  
  const maximum = numbers.reduce((acc, curr) => {
     acc < curr ? (acc = curr) : acc
     return acc
  }, numbers[0])

  const minimum = numbers.reduce((acc, curr) => {
     acc > curr ? (acc = curr) : acc
     return acc
  }, numbers[0])

  return (
    <div>
      <p>Sum of Numbers : {sum}</p>
      <p>Average of All Numbers : {average}</p>
      <p>Maximum number in an array : {maximum}</p>
      <p>Maximum number in an array : {minimum}</p>
    </div>
  )
}

const ObjectManipulation = () => {
  const person = {
    name: "Sarah",
    age: 28,
    city: "New York"
  }

  const personData = {...person, age : 29}
    return (
      <div>
        <h2>Person Details</h2>
        <p>Name: {personData.name}</p>
        <p>Age: {personData.age = 29}</p>
        <p>City: {personData.city}</p>
      </div>
    )
}

const SquareArea = () => {
  let area = 5
  return (
    <div>
      <h2>Area of Square</h2>
      <p>Area of square is : {area * area}</p> 
    </div>
  )
}

const CapitalizeString = () => {
  let str = "hello world"
  return (
    <div>
      <h2>Capitalize Text</h2>
      <p>{str.toUpperCase()}</p>
    </div>
  )
}

const CircleArea = () => {
  let radius = 8
  let pi = 3.14
  return (
    <div>
      <h2>Area of Circle</h2>
      <p>The area of circle is : {pi * radius ** 2}</p>
    </div>
  )
}

function App() {

  return (
    <>
      <ArrayOperations/>
      <ObjectManipulation/>
      <SquareArea/>
      <CapitalizeString/>
      <CircleArea/>
    </>
  )
}

export default App
