import React from 'react';
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import './App.css';
import NavBar from './layout/NavBar'
import LandingPage from './pages/LandingPage';



function App() {
  return (
    <>
      <NavBar />
      <LandingPage/>
    </>
  );
}

export default App;
