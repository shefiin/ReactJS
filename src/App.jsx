import { useState } from 'react';
import './App.css'



function Greeting({ isLoggedIn }) {
  return <h1>{isLoggedIn ? "Welcome Back!" : "Please sign In"}</h1>
}



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (

    <div>
      <Greeting isLoggedIn={isLoggedIn}/>
      <button style={isLoggedIn ? {backgroundColor: "red"} : {backgroundColor: "green"}} onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>

    </div>

  );
};

export default App
