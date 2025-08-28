import { useState } from 'react'


const Smartphones = ( {smartphones} ) => {
  const totalPrice = smartphones.reduce((acc, curr) => acc + curr.price, 0)

  return(
    <div>
      <h2>Total Price of Smartphones</h2>
      <p>{totalPrice.toFixed(2)}</p>
    </div>
  )
}

const Hotels = ( {hotels} ) => {
  const totalRating = hotels.reduce((acc, curr) => acc + curr.rating, 0)

  const averageRating = totalRating / hotels.length

  return(
    <div>
      <h2>Total Average Rating</h2>
      <p>{averageRating.toFixed(2)}</p>
    </div>
  )
}

const Podcasts = ( {podcasts} ) => {
  const podcastListeners = podcasts.reduce((acc, curr) => acc + curr.listeners, 0)

  return (
    <div>
      <h2>Total number of Podcasts Listeners</h2>
      <p>{podcastListeners}</p>
    </div>
  )
}

const Tweets = ( {tweets} ) => {
  const totalRetweets = tweets.reduce((acc, curr) => acc + curr.retweets, 0)

  return (
    <div>
      <h2>Total number of Retweets</h2>
      <p>{totalRetweets}</p>
    </div>
  )
}

const Articles = ( {articles} ) => {
  const totalWordOfContent = articles.reduce((acc, curr) => acc + curr.content.length, 0)

  return(
    <div>
      <h2>Total Word of Content</h2>
      <p>{totalWordOfContent}</p>
    </div>
  )
}

function App() {
  const smartphones = [
    { id: 1, brand: "Samsung", price: 799.99 },
    { id: 2, brand: "iPhone", price: 999.99 },
    { id: 3, brand: "Google Pixel", price: 899.99 }
  ]

  const hotels = [
    { id: 1, name: "Luxury Hotel", rating: 4.8 },
    { id: 2, name: "Budget Inn", rating: 3.5 },
    { id: 3, name: "Resort Paradise", rating: 4.2 }
  ]

  const podcasts = [
    { id: 1, title: "Tech Talk", listeners: 5000 },
    { id: 2, title: "Science Insights", listeners: 3000 },
    { id: 3, title: "Comedy Hour", listeners: 7000 }
  ]

  const tweets = [
    { id: 1, content: "Tweet 1", retweets: 20 },
    { id: 2, content: "Tweet 2", retweets: 15 },
    { id: 3, content: "Tweet 3", retweets: 30 }
  ]

    const articles = [
    { id: 1, title: "Article 1", content: "Content 1" },
    { id: 2, title: "Article 2", content: "Content 2" },
    { id: 3, title: "Article 3", content: "Content 3" }
  ]



  return (
    <>
      <Smartphones smartphones = {smartphones}/>
      <Hotels hotels = {hotels}/>
      <Podcasts podcasts = {podcasts}/>
      <Tweets tweets = {tweets}/>
      <Articles articles = {articles}/>
    </>
  )
}

export default App
