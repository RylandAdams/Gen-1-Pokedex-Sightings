import React from 'react';
import NavBar from './NavBar';
import SightingControl from './SightingControl'
import PokeControl from './PokeControl'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path='/sightings'>
          <SightingControl />
        </Route>
        <Route path='/'>
          <PokeControl />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
