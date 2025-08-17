import { useState } from 'react'


const RandomNumber = () => {
  return (
    <p>Random Number : {Math.floor(Math.random() * 100)}</p>
  )
}

const AbsoulteValue = () => {
  const number = -10
  return(
    <p>Absoulte Value : {Math.abs(number)}</p>
  )
}

const SumOfEvenNumbers = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7]
  const sumOfEvenNum = numbers.reduce((acc, curr) => {
      curr % 2 === 0 ? (acc = acc + curr) : acc
      return acc
  }, 0)

  return (
    <p>Sum of even numbers : {sumOfEvenNum}</p>
  )
}

const PerimeterOfSquare = () => {
   const side = 5
   return (
    <div>
      <h2>Square Perimeter Calculator</h2>
      <p>Side Length : {side} cm</p>
      <p>Perimeter : {side * 4}</p>
    </div>
   )
}

const CurrencyConverter = () => {
  const amount = 50
  const exchangeRate = 74.5

  return(
    <div>
      <h2>Currency Converter</h2>
      <p>Amount in USD : ${amount}</p>
      <p>Exchange Rate : 1 USD = {exchangeRate}</p>
      <p>Amount in INR : {amount * exchangeRate}</p>
    </div>
  )
}

function App() {
 
  return (
    <>
      <RandomNumber/>
      <AbsoulteValue/>
      <SumOfEvenNumbers/>
      <PerimeterOfSquare/>
      <CurrencyConverter/>
    </>
  )
}

export default App
