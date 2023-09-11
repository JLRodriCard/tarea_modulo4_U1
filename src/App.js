
/*import './App.css';*/
import React from "react";
import Header from './components/layout/Header';
import Nav from "./components/layout/Nav";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";



function App() {
  return (
    <div className="App">

      <Header/>
      <Nav/>
      <Main/>
      <Footer/>
           
      
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >

      </a>
    </div>
  );
}

export default App;
