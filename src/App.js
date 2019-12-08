import React from 'react';
import { Switch, Route} from 'react-router-dom';
import { Router } from 'react-router';
import Project from './Components/Project';
import LandingPage from './Components/LandingPage';
import history from './history';


function App(){
  return(
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route path="/project-details" component={Project}/>
      </Switch>
    </Router>
  )
}

export default App;
