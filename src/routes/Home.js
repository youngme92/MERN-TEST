import React, {useState, useEffect} from "react";


const useUsername = () => {
    const [username, setUsername] = useState("");
   useEffect(() => {
     fetch('http://localhost:3001/api').then(res => res.json()).then(data=> setUsername(data.username))
   }, [])
   return {username}
  }

function Home(){
    const {username} = useUsername();
    return (
        <div className="App">
      <h1>{username ? `Hello ${username}` : `Hello world`}</h1>      
    </div>
    )
}


export default Home;