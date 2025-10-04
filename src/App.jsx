import { useState } from "react";
import "./App.css";

function ShowFruits({ items, filter }) {
  const fruitsList = items.filter((item) => item.includes(filter));

  if (fruitsList.length === 0) {
    return <p>No fruits with letter "{filter}"</p>;
  }

  return (
    <div>
      {fruitsList.map((item, index) => (
        <p style={{backgroundColor: "yellow", color: "black"}} key={index}>{item}</p>
      ))}
    </div>
  );
}

function App() {
  const [filter, setFilter] = useState("a");
  const items = ["apple", "banana", "cherry"];

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Filter Fruits</h1>
      <ShowFruits items={items} filter={filter} />

      <div style={{ marginTop: "20px" }}>
        <button onClick={() => setFilter("a")}>Fruits with letter a</button>
        <button onClick={() => setFilter("b")}>Fruits with letter b</button>
        <button onClick={() => setFilter("c")}>Fruits with letter c</button>
        <button onClick={() => setFilter("z")}>Fruits with letter z</button>
      </div>
    </div>
  );
}

export default App;
