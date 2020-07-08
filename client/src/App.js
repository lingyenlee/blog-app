import React, { useEffect } from 'react';
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import './App.css';
import NavBar from './layout/NavBar'
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RecipePage from "./pages/RecipePage";
import AddRecipeForm from './components/AddRecipeForm';


function App() {

  useEffect(() => {
    //initialize materialize JS
    M.AutoInit()
  })

  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/posts/:id" component={RecipePage} />
          <Route exact path="/add-recipe" component={AddRecipeForm} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
