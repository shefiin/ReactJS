import { useState, useEffect } from "react";
import "./App.css";


function App() {

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setData("Shefin is a good man🥰");
      setLoading(false);
    }, 2000);
  }, []);


  if(loading) {
    return <h2>⏳ Loading...</h2>
  } else {
    return (
      <div>
        <h2>✅ Data Loaded Successfully</h2>
        <p>{data}</p>
      </div>
    )
  }
}

export default App;
