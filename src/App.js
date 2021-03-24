import React from 'react'
import Weekly from './components/Weekly'
import Monthly from './components/Monthly'

const appStyle = {
  display:"flex",
  justifyContent:"space-around",
  margin: "auto"
}

function App() {
  return (
    <div style={appStyle} className="App">
      <Weekly/>
      <Monthly/>
    </div>
  );
}

export default App;
