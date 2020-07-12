import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import SearchBar from './layout/SearchBar'
import AddBtn from './layout/AddBtn'
import AddRecipeForm from './components/AddRecipeForm'
import EditRecipeForm from './components/EditRecipleForm'
import { Provider } from 'react-redux'
import store from './store'
import RecipePage from './pages/RecipePage'
import ViewRecipe from './components/ViewRecipe';

const App = () => {

  useEffect(() => {
    //initialize materialize JS
    M.AutoInit()
  })

  return (
    <Provider store={store}>
      <Router>
        <SearchBar />
        <div className="container">
          <AddBtn />
          <AddRecipeForm />
          <EditRecipeForm />
          <Switch>
            <Route exact path='/recipes' component={RecipePage} />
            <Route exact path='/recipes/:id' render={props => <ViewRecipe recipeId={props.match.params.id} />} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
