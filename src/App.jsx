import React, { useState } from 'react'
import "./App.css";


const App = () => {
  const [name, setName] = useState("")
  const [header, setHeader] = useState("")

  function HandleChange(event) {
    setName(event.target.value)    
  }

  function HandleClick(event){
    setHeader(name);

    event.preventDefault();
  }
   
  return (
    <div className='container'>
      <h1>Hello {header}</h1>

      <form onSubmit={HandleClick}>
        <input
          onChange={HandleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default App;
