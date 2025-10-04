import { useState } from 'react';
import './App.css'



function Item({name, initialPacked}) {
  const [isPacked, setIsPacked] = useState(initialPacked);

  return (
    <li 
      className='item'
      onClick={() => setIsPacked(!isPacked)}
      style={{cursor: "pointer"}}
    >
      {name} {isPacked ? "✅" : ""}
    </li>
  )
}



function App() {
  const packingList =[
    { name: "Space Suit", isPacked: true },
    { name: "Helmet", isPacked: false },
    { name: "Oxygen Tank", isPacked: true },
    { name: "Boots", isPacked: false },
    { name: "Perfume", isPacked: false },
  ];

  return (

    <div>
      <h1>My Packing List</h1>
      <ul>
        {packingList.map((item, index) => (
          <Item key={index} name={item.name} initialPacked={item.isPacked}/>
        ))}
      </ul>
    </div>

  );
};

export default App
