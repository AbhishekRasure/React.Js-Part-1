import { useState } from 'react'

//passing prop
const Message = ({ isLoggedIn}) => {
  // if(isLoggedIn){
  //   return <p>Welcome Back, User</p>
  // }else{
  //   return <p>Please login to Continue</p>
  // }

  return isLoggedIn ? <p>Welcome Back, User</p> : <p>Please Login to Continue</p>
}

const Greeting = ({ isMorning }) => <p>{isMorning ? "Good Morning" : "Good Evening!"}</p>

const ShowNotification = ({ notification }) => {
  // If notification equals ture then show notification if else then it shows nothing.
  return <div>{notification && <p>{notification}</p>}</div>
}

const TicketPricing = ({ passengerAge }) => {
  let price = 100

  return (
    <div>
      {passengerAge > 60 ? <p>Ticket Price : {price - 0.15 * price}</p> : <p>Ticket Price : {price}</p>}
    </div>
  )
}

function App() {

  return (
    <>
      <Message isLoggedIn = {true} />
      <Greeting isMorning = {false}/>
      <ShowNotification notification = "Notification message"/>
      <TicketPricing passengerAge= {70} />
    </>
  )
}

export default App
