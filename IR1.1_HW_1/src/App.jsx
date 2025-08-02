
import './App.css'

const Heading = () => {
  return <h1>React PlayGround</h1>
}

const Greetings = () => {
  const name = "Alice Smith"
  return  <h1>Hello, {name} </h1>
}

const ExternalLink = () => {
   const urlLink = "https://www.reactexamples.com"
   return <a href={urlLink} target ="_blank">Visit React Examples</a>
}

const Avatar = () => {
  const imageUrl = "https://via.placeholder.com/200"
   return (
    <div>
        <img src={imageUrl} id="image" alt ="avatar"/>
    </div>
   )
}

const UserInfo = () => {
   const user = {
    name: "Alice Smith",
    age: 28,
    email: "alice.smith@example.com",
    bio: "Passionate about React and building innovative web applications."
  };

  return (
    <div>
      <h2>User Information</h2>
      <p>
        <b>Name:</b>{user.name}
      </p>
      <p>
        <b>Age:</b>{user.age}
      </p>
      <p>
        <b>Email:</b>{user.email}
      </p>
      <p>
        <b>Bio:</b>{user.bio}
      </p>
    </div>
  )
}

function App(){
  return (
    <div>
      <Heading/>
      <Greetings/>
      <ExternalLink/>
      <Avatar/>
      <UserInfo/>
    </div>
  )

}
export default App
