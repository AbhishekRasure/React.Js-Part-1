import { useState } from 'react'


const Cars = ( {cars, model} ) => {
  const carsDetail = cars.find(car => car.model === model)

  return(
    <div>
      <h2>Car Details</h2>
      <p>Model : {carsDetail.model}</p>
      <p>Make : {carsDetail.make}</p>
      <p>Year : {carsDetail.year}</p>
    </div>
  )
}

const Gyms = ( {gyms, gymName} ) => {
  const gymDetail = gyms.find(gym => gym.name === gymName)

  return(
    <div>
      <h2>Gym Details</h2>
      <p>Gym Name : {gymDetail.name}</p>
      <p>Location : {gymDetail.location}</p>
      <p>Rating : {gymDetail.rating}</p>

    </div>
  )
}

const Travels = ( {travels, destination}) => {
  const travelsDetail = travels.find(travel => travel.destination === destination)

  return(
    <div>
      <h2>Travel Details</h2>
      <p>Destination : {travelsDetail.destination}</p>
      <p>Duration : {travelsDetail.duration}</p>
      <p>Activities : {travelsDetail.activities.join(", ")}</p>
    </div>
  )
}

const Laptops = ( {laptops, brand} ) => {
  const laptopDetail = laptops.find(laptop => laptop.brand === brand)

  return(
    <div>
      <h2>Laptop Details</h2>
      <p>Brand : {laptopDetail.brand}</p>
      <p>Processor : {laptopDetail.processor}</p>
      <p>Ram : {laptopDetail.ram}</p>
    </div>
  )
}

const Recipes = ( {recipes, recipieName} ) => {
  const recipesDetail = recipes.find(recipe => recipe.dish === recipieName)

  return(
    <div>
      <h2>Recipe Details</h2>
      <p>Dish : {recipesDetail.dish}</p>
      <p>Cuisine : {recipesDetail.cuisine}</p>
      <p>Ingredients : {recipesDetail.ingredients.join(", ")}</p>
    </div>
  )
}

const BlogPosts = ( {blogPosts, blogId} ) => {
  const blogPostDetail = blogPosts.find(blog => blog.id === blogId)

  return(
    <div>
      <h2>Blog Post Details</h2>
      <p>Id : {blogPostDetail.id}</p>
      <p>Title : {blogPostDetail.title}</p>
      <p>Content : {blogPostDetail.content}</p>
      <p>Category : {blogPostDetail.category}</p>
    </div>
  )
}

function App() {
  const cars = [
    { model: "Car 1", make: "Make 1", year: 2022 },
    { model: "Car 2", make: "Make 2", year: 2021 },
    { model: "Car 3", make: "Make 3", year: 2023 }
  ]

  const gyms = [
    { name: "Gym 1", location: "Location 1", rating: 4.7 },
    { name: "Gym 2", location: "Location 2", rating: 4.2 },
    { name: "Gym 3", location: "Location 3", rating: 4.5 }
  ]

  const travels = [

    {
      destination: "Travel 1",
      duration: "5 days",
      activities: ["Hiking", "Sightseeing"]
    },

    {
      destination: "Travel 2",
      duration: "7 days",
      activities: ["Beach", "Shopping"]
    },

    {
      destination: "Travel 3",
      duration: "3 days",
      activities: ["Cultural Tours", "Photography"]
    }

  ]

  const laptops = [
    { brand: "Laptop 1", processor: "Intel i5", ram: "8GB" },
    { brand: "Laptop 2", processor: "AMD Ryzen 7", ram: "16GB" },
    { brand: "Laptop 3", processor: "Apple M1", ram: "12GB" }
  ]

   const recipes = [

    {
      dish: "Recipe 1",
      cuisine: "Italian",
      ingredients: ["Tomatoes", "Pasta", "Cheese"]
    },

    {
      dish: "Recipe 2",
      cuisine: "Mexican",
      ingredients: ["Beans", "Rice", "Avocado"]
    },

    {
      dish: "Recipe 3",
      cuisine: "Indian",
      ingredients: ["Curry", "Rice", "Naan"]
    }

  ]

  const blogPosts = [
    { id: 1, title: 'Blog Post 1', content: 'Content 1', category: 'Technology' },
    { id: 2, title: 'Blog Post 2', content: 'Content 2', category: 'Food' },
    { id: 3, title: 'Blog Post 3', content: 'Content 3', category: 'Fashion' }
  ]


  return (
    <>
      <Cars cars = {cars} model = "Car 2"/>
      <hr/>
      <Gyms gyms = {gyms} gymName = "Gym 3"/>
      <hr/>
      <Travels travels = {travels} destination = "Travel 3"/>
      <hr/>
      <Laptops laptops = {laptops} brand = "Laptop 3"/>
      <hr/>
      <Recipes recipes = {recipes} recipieName = "Recipe 2"/>
      <hr/>
      <BlogPosts blogPosts = {blogPosts} blogId = {3}/>
    </>
  )
}

export default App
