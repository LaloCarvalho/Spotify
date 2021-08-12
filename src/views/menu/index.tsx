import React from 'react';
import { 
  Header, 
  Links,
  Image,
 } from './styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { 
  Home,
  SignUp,
  Support,
 } from '../../views';

const Menu: React.FC = () => {
  
  return (
    <Router>
      
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
    </Router>
  )
}

export default Menu;
