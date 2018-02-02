import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import homePage from './components/Home/home';
import workoutsPage from "./containers/Workouts/Workouts";

// <Route path="/workouts" component={workoutsPage} />
// <Route path="/create" component={createPage} />
// <Route path="/start" component={startPage} />


class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/workouts" component={workoutsPage} />  
        <Route path="/" exact component={homePage} />
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default App;
