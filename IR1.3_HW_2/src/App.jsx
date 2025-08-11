import { useState } from 'react'


const WelcomeBanner = (props) => {
   return <h1>Welcome to {props = "My Recipe App!"}</h1>
}

const RecipeDetails = ({recipeData}) => {
   return (
    <div>
      <h2>Recipe Data</h2>
      <p>Title : {recipeData.title}</p>
      <p>Author : {recipeData.author}</p>
      <p>Rating : {recipeData.rating}</p>
    </div>
   )
}

const MovieInformation = ({movieData}) => {
    return (
      <div>
          <h2>Movie Information</h2>
          <p>Title : {movieData.title}</p>
          <p>Director : {movieData.director}</p>
          <p>Release Date : {movieData.releaseDate}</p>
      </div>
    )
}

const ProductFeatures = ({productData}) => {

  return (
    <div>
      <h2>Product Features</h2>
      <p>Name : {productData.name}</p>
      <p>Color : {productData.color}</p>
      <p>Size : {productData.size}</p>
    </div>
  )
}

const UserProfileCard = (props) => {
  
  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {props.name}</p>
      <p>Email: {props.email}</p>
      <p>Role: {props.role}</p>
    </div>
  )
}

function App() {
  const recipeData = {

    title: "Chocolate Cake",
    author: "Baker Betty",
    rating: 4.7
  }

  const movieData = {

    title: "The Godfather",
    director: "Francis Ford Coppola",
    releaseDate: "March 24, 1972"
  }

  const productData = {

    name: "Smartwatch",
    color: "Black",
    size: "Medium"
  }
  
  return (
    <>
      <WelcomeBanner/>
      <RecipeDetails recipeData = {recipeData}/>
      <MovieInformation movieData = {movieData}/>
      <ProductFeatures productData = {productData}/>
      <UserProfileCard name = "Alice" email = "alice@example.com" role = "Admin"/>
      
    </>
  )
}

export default App
