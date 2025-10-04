import { useState } from 'react';
import './App.css'



function Notification({ hasNotification }) {
  return (
    <div>
      {hasNotification && <p>You have new notifications🔔</p>}
    </div>
  )
}


function App() {
  const [hasNotification, setHasNotification] = useState(false)

  return (

    <div>
      <h1>Notifications Demo</h1>
      <Notification hasNotification={hasNotification}/>
      <button style={hasNotification ? {backgroundColor: "gray"} : {backgroundColor: "green"}} onClick={() => setHasNotification(!hasNotification)}> 
        {hasNotification ? "Clear notifications" : "Add Notification"}
      </button>
    </div>

  );
};

export default App
