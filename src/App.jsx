import './App.css'


function Item({ name, isPacked }) {
  if(isPacked) {
    return <li className='item'>{name} ✅</li>;
  }
  return <li className='item'>{name} ❌</li>;
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
          <Item key={index} name={item.name} isPacked={item.isPacked}/>
        ))}
      </ul>
    </div>

  );
};

export default App
