import React, { useState } from "react";
import './App.css'
import NavBar from './components/navbar/NavBar.jsx'
import LeftMenu from './components/leftmenu/LeftMenu'
import Content from "./components/content/Content";

function App() {
  return (
    <div className="App">
      <div className="container">
        <NavBar />
        <LeftMenu/>
        <Content/>
      </div>
    </div>
  );
}
  
export default App;