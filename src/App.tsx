import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { 
  Home,
  SignUp,
  Support,
 } from './views';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/views/home/index.tsx">Home</Link>
            </li>
            <li>
              <Link to="/views/signUp/index.tsx">SignUp</Link>
            </li>
            <li>
              <Link to="/views/support/index.tsx">Support</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/views/home/index.tsx">
            {Home}
          </Route>
          <Route path="/views/signUp/index.tsx">
            {SignUp}
          </Route>
          <Route path="/views/support/index.tsx">
            {Support}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
