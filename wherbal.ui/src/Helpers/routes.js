import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../Views/Home';
import Quiz from '../Views/Quiz';
import NotFound from '../Views/NotFound';
import MyPlants from '../Views/My_Plants';
import Wishlist from '../Views/Wishlist';
import AllHerbs from '../Views/AllHerbs';
import SingleHerb from '../Views/SingleHerb';
import SearchResults from '../Views/SearchResults.js';
import QuizSimple from '../Views/Quiz_simple';
import QuizCompound from '../Views/Quiz_compound';
import QuizPvsC from '../Views/Quiz_pvsc';
import QuizLinear from '../Views/Quiz_linear';
import QuizTRL from '../Views/Quiz_trl';

export default function Routes({ user }) {
  return (
      <Switch>
        <Route exact path="/" component={() => <Home user={user}/>} />
        <Route exact path="/quiz" component={() => <Quiz user={user}/>} />
        <Route exact path="/quiz_linear" component={() => <QuizLinear/>} />
        <Route exact path="/quiz_trl" component={() => <QuizTRL/>} />
        <Route exact path="/quiz_simple" component={() => <QuizSimple/>} />
        <Route exact path="/quiz_compound" component={() => <QuizCompound/>} />
        <Route exact path="/quiz_pvsc" component={() => <QuizPvsC/>} />
        <Route exact path="/my_plants" component={(props) => <MyPlants {...props} user={user}/>} />
        <Route exact path="/wishlist" component={(props) => <Wishlist {...props} user={user}/>} />
        <Route exact path="/all_herbs" component={() => <AllHerbs/>} />
        <Route exact path='/details/:id' component={(props) => <SingleHerb {...props} user={user}/>} />
        <Route exact path='/search/:term' component={(props) => <SearchResults {...props}/>} />
        <Route component={NotFound} />
      </Switch>
  );
}
