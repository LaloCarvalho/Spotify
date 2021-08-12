import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import { 
  Home, SignUp, Support,
 } from './views';

function App() {
  return (
    <Router>
      <Switch>
          <Route  path="/views/home/index.tsx">
            {Home}
          </Route>
          <Route path="/views/signUp/index.tsx">
            {SignUp}
          </Route>
          <Route path="/views/support/index.tsx">
            {Support}
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
