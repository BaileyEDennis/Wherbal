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
        <Route exact path="/my_plants" component={() => <MyPlants user={user}/>} />
        <Route exact path="/wishlist" component={() => <Wishlist user={user}/>} />
        <Route exact path="/all_herbs" component={() => <AllHerbs/>} />
        <Route exact path='/details/:id' component={(props) => <SingleHerb {...props}/>} />
        <Route component={NotFound} />
      </Switch>
  );
}
