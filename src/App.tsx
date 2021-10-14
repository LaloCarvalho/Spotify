import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import {
  Home, SignUp, Support, SignIn,
} from './views';
import OucaGratis from './views/oucaGratis/';
import OucaGratisDetalhes from './views/oucaGratisDetalhes/';

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
        <Route exact path="/signIn">
          <SignIn/>
        </Route>
        <Route exact path="/oucaGratis">
          <OucaGratis/>
        </Route>
        <Route exact path="/oucaGratis/:id">
          <OucaGratisDetalhes/>
        </Route>
        <Route exact path="/artista/:id">
          <OucaGratisDetalhes/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
