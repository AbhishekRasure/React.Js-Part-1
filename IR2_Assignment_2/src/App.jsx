import { useState } from 'react'

const Exercises = ( {exercises} ) => {
  const totalCalories = exercises.reduce((acc, curr) => acc + curr.caloriesBurned, 0)

  return(
    <div>
      <h2>Exercise Details</h2>
      <p>Total Calories Burned : {totalCalories}</p>
    </div>
  )
}

const Songs = ( {songs} ) => {
  const totalDuration = songs.reduce((acc,curr) => acc + curr.duration, 0)

  return(
    <div>
      <h2>Songs Detail</h2>
      <p>Total Songs Duration : {totalDuration}</p>
    </div>
  )
}

const Books = ( {books, bookTitle} ) => {
  const bookDetails = books.find(book => book.title === bookTitle)

  return(
    <div key = {bookDetails.id}>
      <h2>Book Data</h2>
      <p>Title : {bookDetails.title}</p>
      <p>Author : {bookDetails.author}</p>
    </div>
  )
}

const SongsData = ( {songsData, songTitle} ) => {
  const songsDetail = songsData.find(song => song.title === songTitle)

  return(
    <div>
      <h2>Song Details</h2>
      <p>Title : {songsDetail.title}</p>
      <p>Artist : {songsDetail.artist}</p>
      <p>Genre : {songsDetail.genre}</p>
    </div>
  )
}

const Cities = ( {cities, cityName} ) => {
  const citiesDetail = cities.find(city => city.name === cityName)

  return(
    <div>
      <h2>City Detail</h2>
      <p>Name : {citiesDetail.name}</p>
      <p>Population : {citiesDetail.population}</p>
    </div>
  )
}

const Products = ( {products, productId} ) => {
  const productsDetail = products.find(product => product.id === productId)

  return(
    <div>
      <h2>Product Details</h2>
      <p>ID : {productsDetail.id}</p>
      <p>Name : {productsDetail.name}</p>
      <p>Price : {productsDetail.price}</p>
    </div>
  )
}

const Students = ( {students, studentName} ) => {
  const studentDetail = students.find(student => student.name === studentName)

  return(
    <div>
      <h2>Student Details</h2>
      <p>Name : {studentDetail.name}</p>
      <p>Age : {studentDetail.age}</p>
      <p>Math Grade : {studentDetail.grades.math}</p>
      <p>Science Grade : {studentDetail.grades.science}</p>
      <p>English Grade : {studentDetail.grades.english}</p>
    </div>
  )
}

const Orders = ( {orders, customerName} ) => {
  const customerDetail = orders.find(order => order.customer === customerName)

  const productListing = customerDetail.products.map(product => 
    <div key = {product.id}>
      <p>Name : {product.name}</p>
      <p>Quantity : {product.quantity}</p>
    </div>
  )

  return(
    <div>
      <h2>Order Details</h2>
      <p>Customer Name : {customerDetail.name}</p>
      <h4>Products</h4>
      {productListing}
      <p>Total Amount : {customerDetail.totalAmount}</p>      
    </div>
  )
}

const Employees = ( {employees, employeeId} ) => {
  const employeeDetail = employees.find(employee => employee.id === employeeId)

  return(
    <div>
    <h2>Employee Details</h2>
      <p>Name : {employeeDetail.name}</p>
      <p>Position : {employeeDetail.position}</p>
      <p>Department : {employeeDetail.department.name}</p>
      <p>Location : {employeeDetail.department.location}</p>
    </div>
  )
}

const Store = ( {store} ) => {
  const {categories} = store
  const totalStocks = categories.reduce((acc, curr) => (curr.itemDetail.inStock ? acc + 1 : acc), 0)
    
  

  return(
    <div>
      <h2>Store Details</h2>
      <p>Total Number of Stocks : {totalStocks}</p>
    </div>
  )
}

function App() {
  const exercises = [

  { id: 1, name: "Running", caloriesBurned: 300 },
  { id: 2, name: "Cycling", caloriesBurned: 200 },
  { id: 3, name: "Swimming", caloriesBurned: 400 }

]

const songs = [

  { id: 1, title: "Song A", duration: 180, rating: 4.2 },
  { id: 2, title: "Song B", duration: 210, rating: 3.8 },
  { id: 3, title: "Song C", duration: 150, rating: 4.5 }

]

const books = [

  { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction" },
  { id: 2, title: "1984", author: "George Orwell", genre: "Dystopian" },
  { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic" }

]

const songsData = [

  { id: 1, title: "Stairway to Heaven", artist: "Led Zeppelin", genre: "Rock" },
  { id: 2, title: "Bohemian Rhapsody", artist: "Queen", genre: "Rock" },
  { id: 3, title: "Rolling in the Deep", artist: "Adele", genre: "Pop" }

]

const cities = [

  { id: 1, name: "New York", population: 8500000 },
  { id: 2, name: "Paris", population: 2200000 },
  { id: 3, name: "Tokyo", population: 3770000 }

]

const products = [

  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Smartphone", price: 800 },
  { id: 3, name: "Headphones", price: 60 }

]

const students = [

  { id: 1, name: "Alice", age: 20, grades: { math: 90, science: 85, english: 92 } },
  { id: 2, name: "Bob", age: 22, grades: { math: 78, science: 80, english: 85 } },
  { id: 3, name: "Charlie", age: 21, grades: { math: 95, science: 88, english: 94 } }

]

const orders = [

  { id: 1, customer: "John Doe", totalAmount: 150, products: [{ id: 101, name: "Widget", quantity: 2 }, { id: 102, name: "Gadget", quantity: 1 }] },
  { id: 2, customer: "Alice Smith", totalAmount: 200, products: [{ id: 103, name: "Tool", quantity: 1 }, { id: 104, name: "Device", quantity: 3 }] },
  { id: 3, customer: "Bob Johnson", totalAmount: 100, products: [{ id: 105, name: "Accessory", quantity: 5 }] }

]

const employees = [

  { id: 1, name: "Jane Doe", position: "Software Engineer", department: { name: "Engineering", location: "Building A" } },
  { id: 2, name: "Sam Smith", position: "Marketing Manager", department: { name: "Marketing", location: "Building B" } },
  { id: 3, name: "Mike Johnson", position: "HR Specialist", department: { name: "Human Resources", location: "Building C" } }

]

const store = {

  name: "Tech Emporium",
  categories: [

    { id: 1, name: "Electronics", itemDetail: { id: 101, product: "Laptop", inStock: true } },
    { id: 2, name: "Accessories", itemDetail: { id: 201, product: "Headphones", inStock: true } },
    { id: 3, name: "Electronics", itemDetail: { id: 301, product: "Heater", inStock: false } }

  ]
}

  return (
    <>
      <Exercises exercises = {exercises}/>
      <hr/>
      <Songs songs = {songs}/>
      <hr/>
      <Books books = {books} bookTitle = "The Great Gatsby"/>
      <hr/>
      <SongsData songsData = {songsData} songTitle = "Bohemian Rhapsody"/>
      <hr/>
      <Cities cities = {cities} cityName = "Paris"/>
      <hr/>
      <Products products = {products} productId = {3}/>
      <hr/>
      <Students students = {students} studentName = "Charlie"/>
      <hr/>
      <Orders orders = {orders} customerName = "Alice Smith"/>
      <hr/>
      <Employees employees = {employees} employeeId = {3}/>
      <hr/>
      <Store store = {store}/>
    </>
  )
}

export default App
