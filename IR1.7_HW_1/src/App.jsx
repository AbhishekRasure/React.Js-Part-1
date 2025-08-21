import { useState } from 'react'


const UserStatus = ( {isOnline} ) => <p>{isOnline ? "User is Online" : "User is Offline"}</p>

const DayOfWeek = ( {isWeekend} ) => <p>{isWeekend ? "Enjoy your weekend!" : "Have great day!"}</p>

const ShoppingCart = ( {itemCount} ) => <p>{itemCount > 0 ? `You have ${itemCount}` : "Your Cart is Empty."}</p>

const DiscountOffer = ( {isPrimeMember} ) => <p>{isPrimeMember ? "You are eligible for 20% discount." : "Become a prime member for exclusive discounts."}</p>

const ShowError = ( {showError} ) => <p>{showError && <p>{showError}</p>}</p>

function App() {


  return (
    <>
      <UserStatus isOnline = {true}/>
      <DayOfWeek isWeekend = {false}/>
      <ShoppingCart itemCount = {10}/>
      <DiscountOffer isPrimeMember = {false}/>
      <ShowError showError = "An error occurred. Please try again later."/>
    </>
  )
}

export default App
