import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import {
  Home, SignUp, Support,
} from './views';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/signUp">
          <SignUp/>
        </Route>
        <Route exact path="/support">
          <Support/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
