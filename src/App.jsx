import React, { useState } from 'react'
import "./App.css";


const App = () => {
  const [name, setName] = useState("")

  function HandleChange(event) {
    setName(event.target.value)
    
  }
   
  return (
    <div className='container'>
      <h1>Hello {name}</h1>
      <input 
        onChange={HandleChange}
        type="text" 
        placeholder="What's your name?" 
      />
      <button>Submit</button>
    </div>
  );
};

export default App;
