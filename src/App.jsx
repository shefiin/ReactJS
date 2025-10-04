import './App.css'

function App() {

  const Welcome = (props) => {
    return <div>{props.children}</div>;
  }

  return (
    <Welcome>
      <h1>Hello, world!</h1>
      <p>Welcome to React.</p>
    </Welcome>
  );
};

export default App
