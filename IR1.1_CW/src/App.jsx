
import './App.css'

const MyComponent = () => {
  return <p>Learning React</p>
}


const Greetings = () => {
  const name = "Abhishek"
  return <h2>Hello,<p>{name}</p>!</h2>
}

const LinkUrl = () => {
  const url = "https://example.com"
  return <a href={url} target='_blank'>Visit Example Website</a>
}

const ImageTag = () => {
  const imageUrl = "https://via.placeholder.com/150"
  return <div> <img src= {imageUrl} alt="placeholder"/></div>
}

const ProfileDetails = () => {
    const details = {
       name: "John Doe",
       age: 25,
       email: "john@gmail.com",
       bio: "A passionate software developer."
    }

    return (
    <div>
      <p>Name : {details.name}</p>
      <p>Age : {details.age}</p>
      <p>Email : {details.email}</p>
      <p>Bio : {details.bio}</p>
    </div>
)
}



function App() {
  return (
    <div>
      <MyComponent />
      <Greetings/>
      <LinkUrl />
      <ImageTag />
      <ProfileDetails/>
      
    </div>
  )
}

export default App
