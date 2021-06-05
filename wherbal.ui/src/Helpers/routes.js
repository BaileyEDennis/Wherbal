import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../Views/Home';
import NotFound from '../Views/NotFound';
import MyPlants from '../Views/My_Plants';
import Wishlist from '../Views/Wishlist';

export default function Routes({ user }) {
  return (
      <Switch>
        <Route exact path="/" component={() => <Home user={user}/>} />
        <Route exact path="/my_plants" component={() => <MyPlants user={user}/>} />
        <Route exact path="/wishlist" component={() => <Wishlist user={user}/>} />
        <Route component={NotFound} />
      </Switch>
  );
}
