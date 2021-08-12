import React from 'react';
import { Container, Header, Image, Footer, LinkHome, LinksRight } from './styles';

import logo from './assets/spotify.svg';
import { Route, Switch } from 'react-router';
import {
  Home,
  SignUp,
  Support,
} from '../../views';

const page: React.FC = (props) => {
  return <Container>
    <Header>
      <LinkHome to="/views/home/index.tsx"><Image src={logo} alt="Logo" /></LinkHome>
      <LinksRight to="/views/home/index.tsx">Premium</LinksRight>
      <LinksRight to="/views/support/index.tsx">Suporte</LinksRight>
      <LinksRight to="/views/home/index.tsx">Baixar</LinksRight>
      <LinksRight to="/views/home/index.tsx">|</LinksRight>
      <LinksRight to="/views/signUp/index.tsx">Inscrever-se</LinksRight>
      <LinksRight to="/views/home/index.tsx">Entrar</LinksRight>      
    </Header>

    {props.children}
    <Footer>
      <h1>teste</h1>
    </Footer>
  </Container>;
}

export default page;
