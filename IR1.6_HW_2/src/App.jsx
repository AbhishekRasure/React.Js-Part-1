import { useState } from 'react'

const ReverseArray = () => {
  const originalArray = [1, 2, 3, 4, 5]
  const reverseArray = (arr) => {
    return arr.reverse().join(", ")
  }
  return <p>Reverse Array : {reverseArray(originalArray)}</p>
}

const CalculateBMI = () => {
  const weight = 70
  const height = 1.75
  const calculateBMI = () => {
    return Math.floor(weight / height ** 2)
  }

  return <p>BMI : {calculateBMI()}</p>
}

const GenerateQuote = () => {
  const quotes = [
      "The only way to do great work is to love what you do. - Steve Jobs",
      "Innovation distinguishes between a leader and a follower. - Steve Jobs",
      "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
      "Stay hungry, stay foolish. - Steve Jobs",
      "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela"
    ]

  const getRandomquote = (arr) => {
    let randomQuote = Math.floor((Math.random() * arr.length))
    return arr[randomQuote]
  }  

  return <p>{getRandomquote(quotes)}</p>
}

const GradeAnalyser = () => {
  const score = 85
  let grade = ""
  let msg = ""

  const checkGrade = (score) => {
    if(score >= 90 && score <= 100) {
      grade = "A";
      msg = "Excellent work!";
    } else if (score >= 80 && score <= 89) {
      grade = "B";
      msg = "Good job!";
    } else if (score >= 70 && score <= 79) {
      grade = "C";
      msg = "Not bad, keep it up!";
    } else if (score >= 60 && score <= 69) {
      grade = "D";
      msg = "You passed, but aim higher next time.";
    } else if (score < 60) {
      grade = "F ";
      msg = "Sorry, you didn't pass. Keep working hard!";
    }
}
  checkGrade(score)

  return (
    <div>
      <h2>Grade Analyser</h2>
      <p>{`Score: ${score}`}</p>
      <p>{`Grade: ${grade}`}</p>
      <p>{`${msg}`}</p>
    </div>
  )
}

const TemperatureFeedback = () => {
  let currTemp = 25
  let msg = ""

  const checkTemp = () => {
    if(currTemp < 0){
      msg = "Brr, it's freezing!"
    } else if(currTemp >= 0 && currTemp < 10){
      msg = "It's quite cold, bundle up!"
    } else if(currTemp >= 10 && currTemp < 20){
      msg = "The weather is cool and comfortable."
    } else if(currTemp >= 20 && currTemp < 30){
      msg = "It's a warm day!"
    } else{
      msg = "It's hot outside, stay cool!"
    }
  }
  checkTemp(currTemp)
  return (
    <div>
      <h2>Temperature Feedback</h2>
      <p>Current Temperature: {currTemp}</p>
      <p>{msg}</p>
    </div>
  )
}

function App() {
  
  return (
    <>
      <h1>Reverse Array</h1>
      <ReverseArray/>
      <h1>BMI Calculator</h1>
      <CalculateBMI/>
      <GenerateQuote/>
      <GradeAnalyser/>
      <TemperatureFeedback/>
    </>
  )
}

export default App
