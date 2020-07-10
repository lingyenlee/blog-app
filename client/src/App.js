import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';
import SearchBar from './layout/SearchBar'
import Recipes from './components/Recipes';

const App = () => {

  useEffect(() => {
    //initialize materialize JS
    M.AutoInit()
  })

  return (
    <>
      {/* <Router> */}
      <SearchBar />
      <div className="container">
        <Recipes />
      </div>

      {/* <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/posts/:id" component={RecipePage} />
          <Route exact path="/recipe-form" component={RecipeForm} />
          <Route exact path="/edit-recipe/:id" render={props => <RecipeForm recipeId={props.match.params.id} />} />
        </Switch>
      </Router> */}
    </>
  );
}

export default App;
