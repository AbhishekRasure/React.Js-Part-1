import { useState } from 'react'


const Addtion = () => {
  const a = 2
  const b = 5
  return(
    <p>Addition of {a} + {b} is {a + b}</p>
  )
}

const TemperatureCalculator = () => {
  const celcius = 30

  return(
    <p>{celcius} degree is equal to {(celcius * 9) / 5 + 32} Farenheit.</p>
  )
}

const Welcome = () => {
  const firstName = "John"
  const secondName = "Doe"
  
  return <p>{`Welcome, ${firstName} ${secondName}`}</p>
}

const CombinedOperations = () => {
  const a = 15
  const b = 7
  const c = 3
  return (
    <div>
      <p>{a} + {b} + {c}equals {a + b + c}</p>
      <p>{a} - {b} equals {a - b}</p>
      <p>{a} * {b} equals {a * b}</p>
    </div>
  )
}

function App() {
  
  return (
    <>
     <Addtion/>
     <TemperatureCalculator/>
     <CombinedOperations/>
     <Welcome/>
    </>
  )
}

export default App
