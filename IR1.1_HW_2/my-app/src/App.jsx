
const WelcomeMessage = () => {
  const message = "Discover the World of JSX!"

  return (
    <h1>{message}</h1>
  )
}

const GreetActor = () => {
  const welcomeMsg = "Welcome, Tom Hardy fans!"
  return <h1>{welcomeMsg}</h1>
}

const ExternalLink = () => {
  const linkUrl = "https://www.reactjs.org"

  return <a href={linkUrl} target="_blank">Explore React Documentation</a>
}

const VideoPlayer = () => {
  const url = "https://www.example.com/video.mp4"
  return (
    <div>
      <video width="320" height="200" controls>
        <source src={url} type="video/mp4"/>
      </video>
    </div>
  )
}

const MovieDetails = () => {
  const movie = {

    title: "Forrest Gump",
    director: "Robert Zemeckis",
    year: 1994,
    rating: "PG-13",
    duration: "2h 22min"

  }

  return (
    <div>
      <h2>Movie Details</h2>
      <p><b>Title: </b>{movie.title}</p>
      <p><b>Director: </b>{movie.director}</p>
      <p><b>Year: </b>{movie.year}</p>
      <p><b>Rating: </b>{movie.rating}</p>
      <p><b>Duration: </b>{movie.duration}</p>
    </div>
  )
}

function App(){
  return (
    <div>
      <WelcomeMessage/>
      <GreetActor/>
      <ExternalLink/>
      <VideoPlayer/>
      <MovieDetails/>
    </div>
  )
}


export default App
