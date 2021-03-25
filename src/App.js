import React from 'react'
import Weekly from './components/Weekly'
import Monthly from './components/Monthly'
import Header from "./components/Header"

const innerDivStyle = {
  display:"flex",
  justifyContent:"space-around",
  margin: "auto"
}

function App() {
  return (
    <div  className="App">
      <Header/>
      <div style={innerDivStyle}>
        <Weekly />
        <Monthly />
      </div>
    </div>
  );
}

export default App;
