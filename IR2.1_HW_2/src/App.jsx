import { useState } from 'react'


const Laptops = ( {laptops} ) => {
  const laptopsListing = laptops.map((laptop) => 
    <div key = {laptop.id}>
      <h3>{laptop.brand}</h3>
      <p>Price : ${laptop.price}</p>
    </div>
  )

  return (
    <>
      <h2>Laptops</h2>
      {laptopsListing}
    </>
  )
}

const TouristSpots = ( {touristSpots} ) => {
  const touristSpotsListing = touristSpots.map((tourist) => 
     <div key = {tourist.id}>
      <h3>{tourist.name}</h3>
      <p>Location : {tourist.location}</p>
     </div>
  )

  return (
    <>
      <h2>Tourist Spots</h2>
      {touristSpotsListing}
    </>
  )
}

const PodcastEpisodes = ( {podcastEpisodes} ) => {
  const podcastEpisodeListing = podcastEpisodes.map((podcastEpisode) => 
    <div key = {podcastEpisode.id}>
      <h3>{podcastEpisode.title}</h3>
      <p>Duration : {podcastEpisode.duration}</p>
    </div>
  )

  return (
    <>
      <h2>Podcasts Episodes</h2>
      {podcastEpisodeListing}
    </>
  )
}

const NewsArticles = ( {newsArticles} ) => {
  const newsArticlesListing = newsArticles.map((news) => 
    <div>
      <h3>{news.news}</h3>
      <p>{news.description}</p>
    </div>
  )

  return (
    <>
      <h2>News Articles</h2>
      {newsArticlesListing}
    </>
  )
}

const Games = ( {games} ) => {
  const gamesListing = games.map((game) => 
    <div>
      <h3>{game.game}</h3>
      <p>Genre : {game.genre}</p>
    </div>
  )

  return(
    <>
      <h3>Games</h3>
      {gamesListing}
    </>
  )
}

function App() {
const laptops = [
  {id: 1, brand: "Dell", price: 999},
  {id: 2, brand: "HP", price: 899},
  {id: 3, brand: "Lenovo", price: 1099}
]

const touristSpots = [
  {id: 1, name: "Grand Canyon", location: "Arizona USA"},
  {id: 2, name: "Eiffel Tower", location: "Paris France"},
  {id: 3, name: "Great Wall of China", location: "Beijing China"}
]

const podcastEpisodes = [
  {id: 1, title: "Episode 1", duration: "30 minutes"},
  {id: 2, title: "Episode 2", duration: "45 minutes"},
  {id: 3, title: "Episode 3", duration: "60 minutes"}
]

const newsArticles = [
  {id: 1, news: "News 1", description: "Description 1"},
  {id: 2, news: "News 2", description: "Description 2"},
  {id: 3, news: "News 3", description: "Description 3"}
]

const games = [
  {id: 1, game: "Game 1", genre: "Action"},
  {id: 2, game: "Game 2", genre: "Adventure"},
  {id: 3, game: "Game 3", genre: "Strategy"}
]

  return (
    <>
      <Laptops laptops = {laptops}/>
      <hr/>
      <TouristSpots touristSpots = {touristSpots}/>
      <hr/>
      <PodcastEpisodes podcastEpisodes = {podcastEpisodes}/>
      <hr/>
      <NewsArticles newsArticles = {newsArticles}/>
      <hr/>
      <Games games = {games}/>
    </>
  )
}

export default App
