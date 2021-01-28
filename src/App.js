import React from "react"
import './App.css';
import Assembler from './components/Assembler';
import Emulator from "./components/Emulator/Emulator";
import Nav from './components/Nav';
function App() {
  return(
    <React.Fragment>
      <Nav />

      <div className="main">
        <Assembler />    
        <Emulator  />
      </div>
    </React.Fragment>
    
  )
}

export default App;
