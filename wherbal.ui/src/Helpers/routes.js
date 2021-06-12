import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../Views/Home';
import NotFound from '../Views/NotFound';
import MyPlants from '../Views/My_Plants';
import Wishlist from '../Views/Wishlist';
import AllHerbs from '../Views/AllHerbs';
import SingleHerb from '../Views/SingleHerb';

export default function Routes({ user }) {
  return (
      <Switch>
        <Route exact path="/" component={() => <Home user={user}/>} />
        <Route exact path="/my_plants" component={(props) => <MyPlants {...props} user={user}/>} />
        <Route exact path="/wishlist" component={(props) => <Wishlist {...props} user={user}/>} />
        <Route exact path="/all_herbs" component={() => <AllHerbs/>} />
        <Route exact path='/details/:id' component={(props) => <SingleHerb {...props} user={user}/>} />
        <Route component={NotFound} />
      </Switch>
  );
}
