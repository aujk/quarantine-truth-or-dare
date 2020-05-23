import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/home.js';
import GamePage from './pages/game.js';

const Main = () => {
  return (
    <Switch> 
      <Route exact path='/' component={HomePage}></Route>
      <Route exact path='/home' component={HomePage}></Route>
      <Route exact path='/game' component={GamePage}></Route>
    </Switch>
  );
}

export default Main;