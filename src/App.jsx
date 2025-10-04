import { useState } from 'react';
import './App.css'



function StatusMessage({ status }) {
  switch(status) {
    case "loading":
      return <p>Loading...</p>;
    case "success": 
      return <p>✅ Data loaded successfully!</p>  
    case "error":
      return <p>❌ Error loading data.</p>;
    default: 
      return <p>ℹ️ Unknown status</p>    
  }
}


function App() {
  const [status, setStatus] = useState("loading")

  return (

    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Status example</h1>
      <StatusMessage status={status}/>
      <div style={{marginTop: "20px" }}>
        <button style={{backgroundColor: "silver"}} onClick={() => setStatus("loading")}>Loading</button>
        <button style={{backgroundColor: "green"}} onClick={() => setStatus("success")}>success</button>
        <button style={{backgroundColor: "red"}} onClick={() => setStatus("error")}>error</button>
        <button style={{backgroundColor: "gray"}} onClick={() => setStatus("unknown")}>unknown</button>
      </div>
    </div>

  );
};

export default App
