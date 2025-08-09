import { useState } from 'react'

const WelcomeMessage = (props) => {
  return <h1>Welcome, {props.name}!</h1>
}

const BookDetails = ({bookData}) => {
 
  return (
    <div>
        <h1>Book Details</h1>
        <p>Title: {bookData.title}</p>
        <p>Author: {bookData.author}</p>
        <p>Genre: {bookData.genre}</p>
    </div>
  )
}

const ArticleInformation = ({articleData}) => {

  return (
    <div>
      <h1>Artical Information</h1>
      <p>Title : {articleData.title}</p>
      <p>Author : {articleData.author}</p>
      <p>Publish Date : {articleData.publishedDate}</p>
    </div>
  )
}

const ProductDetails = ({productData}) => {

  return (
    <div>
      <h1>Product Details</h1>
      <p>Name : {productData.name}</p>
      <p>Brand : {productData.brand}</p>
      <p>Price : {productData.price}</p>
    </div>
  )
}

const EventDetails = ({eventData}) => {

  return (
    <div>
      <h1>Event Details</h1>
      <p>Title : {eventData.title}</p>
      <p>Location : {eventData.location}</p>
      <p>Date : {eventData.date}</p>
    </div>
  )
}

const UserProfile = (props) => {
  
  return (
    <div>
      <h1>User Profile</h1>
      <h4>Name : {props.userName}</h4>
      <img src={props.url} alt = {props.placeholder}/>
    </div>
  )
}

function App() {
   const bookData = {

    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Classic"
  };

  const articleData = {

    title: "The Power of Habit",
    author: "Charles Duhigg",
    publishedDate: "March 1, 2024"
  };

  const productData = {

    name: "Smartphone",
    brand: "Samsung",
    price: 799.99
  };

  const eventData = {

    title: "Tech Conference 2024",
    location: "San Francisco",
    date: "April 15, 2024"
  };

  return (
    <>
      <WelcomeMessage name= "Emily"/>
      <BookDetails bookData = {bookData} />
      <ArticleInformation articleData = {articleData}/>
      <ProductDetails productData = {productData}/>
      <EventDetails eventData = {eventData}/>
      <UserProfile userName = "chris" url="https://via.placeholder.com/150" alt ="placeholder"/>
      
    </>
  )
}

export default App
