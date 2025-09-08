import { useState } from 'react'


const ProductsList = ( {products, productId} ) => {
  const productDetail = products.find(product => product.id === productId)

  return(
    <div>
      <h2>Product Data</h2>
      <p>ID : {productDetail.id}</p>
      <p>Name : {productDetail.name}</p>
      <p>Price : {productDetail.price}</p>
    </div>
  )
}

const Restaurants = ( {restaurants, restaurantId} ) => {
  const restaurantsDetail = restaurants.find(restaurant => restaurant.id === restaurantId)

  return(
    <div>
      <h2>Restaurant Data</h2>
      <p>ID : {restaurantsDetail.id}</p>
      <p>Name : {restaurantsDetail.name}</p>
      <p>Cuisine : {restaurantsDetail.cuisine}</p>
    </div>
  )
}

const Videos = ( {videos, videosId}) => {
  const videosDetail = videos.find(video => video.id === videosId)

  return(
    <div>
      <h2>Videos Data</h2>
      <p>ID : {videosDetail.id}</p>
      <p>Title : {videosDetail.title}</p>
      <p>Views : {videosDetail.views}</p>
    </div>
  )
}

function App() {
  const products = [
    {id: 1, name: "Product 1", price: 19.99},
    {id: 2, name: "Product 2", price: 29.99},
    {id: 3, name: "Product 3", price: 39.99}
  ]

  const restaurants = [
    {id: 1, name: "Restaurant 1", cuisine: "Itanlian"},
    {id: 2, name: "Restaurant 2", cuisine: "Mexican"},
    {id: 3, name: "Restaurant 3", cuisine: "Chinese"}
  ]

  const videos = [
    {id: 1, title: "Video 1", views: 1000},
    {id: 2, title: "Video 2", views: 2000},
    {id: 3, title: "Video 3", views: 3000}
  ]

  return (
    <>
      <ProductsList products = {products} productId = {2}/>
      <hr/>
      <Restaurants restaurants = {restaurants} restaurantId = {3}/>
      <hr/>
      <Videos videos = {videos} videosId = {2}/>
    </>
  )
}

export default App
