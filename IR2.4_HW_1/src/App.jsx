import { useState } from 'react'


const Movies = ( {movies, moviesTitle}) => {
  const moviesDetail = movies.find(movie => movie.title === moviesTitle)

  return(
    <div>
      <h2>Movies Data</h2>
      <p>Title : {moviesDetail.title}</p>
      <p>Director : {moviesDetail.director}</p>
      <p>Genre : {moviesDetail.genre}</p>
    </div>
  )
}

const Cafes = ( {cafes, cafeName} ) => {
  const cafesDetail = cafes.find(cafe => cafe.name === cafeName)

  return(
    <div>
      <h2>Cafes Data</h2>
      <p>Name : {cafesDetail.name}</p>
      <p>Location:{cafesDetail.location}</p>
      <p>Rating : {cafesDetail.rating}</p>
    </div>
  )
}

const Podcasts = ( {podcasts, podcastTitle} ) => {
  const podcastDetail = podcasts.find(podcast => podcast.title === podcastTitle)

  return(
    <div>
      <h2>Podcasts Data</h2>
      <p>Title : {podcastDetail.title}</p>
      <p>Host : {podcastDetail.host}</p>
      <p>Listeners : {podcastDetail.listeners}</p>
    </div>
  )
}

const Books = ( {books, bookTitle} ) => {
  const booksDetails = books.find(book => book.title === bookTitle)

  return (
    <div>
      <h2>Books Data</h2>
      <p>Title : {booksDetails.title}</p>
      <p>Author : {booksDetails.author}</p>
      <p>Pages : {booksDetails.pages}</p>
    </div>
  )
}

const Articles = ( {articles, articleTitle} ) => {
  const articlesDetails = articles.find(article => article.title === articleTitle)

  return(
    <div>
      <h2>Articles Data</h2>
      <p>Title : {articlesDetails.title}</p>
      <p>Author : {articlesDetails.author}</p>
      <p>Category : {articlesDetails.category}</p>
    </div>
  )
}

const BlogPosts = ( {blogPosts, blogPostId} ) => {
  const blogPostDetails = blogPosts.find(blog => blog.id === blogPostId)

  return(
    <div>
      <h2>ID : {blogPostDetails.id}</h2>
      <p>Title : {blogPostDetails.title}</p>
      <p>Content : {blogPostDetails.content}</p>
      <p>Category : {blogPostDetails.category}</p>
    </div>
  )
}

function App() {
  const movies = [
    { title: "Movie 1", director: "Director 1", genre: "Action" },
    { title: "Movie 2", director: "Director 2", genre: "Comedy" },
    { title: "Movie 3", director: "Director 3", genre: "Drama" }
  ]

  const cafes = [
    { name: "Cafe 1", location: "Location 1", rating: 4.5 },
    { name: "Cafe 2", location: "Location 2", rating: 4.2 },
    { name: "Cafe 3", location: "Location 3", rating: 4.8 }
  ]

  const podcasts = [
    { title: "Podcast 1", host: "Host 1", listeners: 5000 },
    { title: "Podcast 2", host: "Host 2", listeners: 3000 },
    { title: "Podcast 3", host: "Host 3", listeners: 7000 }
  ]

  const books = [
    { title: "Book 1", author: "Author 1", pages: 300 },
    { title: "Book 2", author: "Author 2", pages: 250 },
    { title: "Book 3", author: "Author 3", pages: 400 }
  ]

  const articles = [
    { title: "Article 1", author: "Author 1", category: "Technology" },
    { title: "Article 2", author: "Author 2", category: "Food" },
    { title: "Article 3", author: "Author 3", category: "Fashion" }
  ]

  const blogPosts = [
    { id: 1, title: 'Blog Post 1', content: 'Content 1', category: 'Technology' },
    { id: 2, title: 'Blog Post 2', content: 'Content 2', category: 'Food' },
    { id: 3, title: 'Blog Post 3', content: 'Content 3', category: 'Technology' }
  ]

  return (
    <>
      <Movies movies = {movies} moviesTitle = "Movie 2"/>
      <hr/>
      <Cafes cafes = {cafes} cafeName = "Cafe 3"/>
      <hr/>
      <Podcasts podcasts = {podcasts} podcastTitle = "Podcast 3"/>
      <hr/>
      <Books books = {books} bookTitle = "Book 1"/>
      <hr/>
      <Articles articles = {articles} articleTitle = "Article 3"/>
      <hr/>
      <BlogPosts blogPosts = {blogPosts} blogPostId = {2}/>
    </>
  )
}

export default App
