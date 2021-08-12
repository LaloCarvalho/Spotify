import React from 'react';
import { Container, Header, Footer, LinkHome, LinksRight, ImageTop, ImageBottom, Table, TR, TH, TD, P, ImageSocialMedia, H3 } from './styles';

import logo from './assets/spotify.svg';
import instagram from './assets/facebook.svg';
import facebook from './assets/instagram.svg';
import twitter from './assets/twitter.svg';
import { Route, Switch } from 'react-router';
import {
  Home,
  SignUp,
  Support,
} from '../../views';
import { Link } from 'react-router-dom';

const page: React.FC = (props) => {
  return <Container>
    <Header>
      <LinkHome to="/views/home/index.tsx"><ImageTop src={logo} alt="Logo" /></LinkHome>
      <LinksRight to="/views/home/index.tsx">Premium</LinksRight>
      <LinksRight to="/views/support/index.tsx">Suporte</LinksRight>
      <LinksRight to="/views/home/index.tsx">Baixar</LinksRight>
      <LinksRight to="/views/home/index.tsx">|</LinksRight>
      <LinksRight to="/views/signUp/index.tsx">Inscrever-se</LinksRight>
      <LinksRight to="/views/home/index.tsx">Entrar</LinksRight>      
    </Header>
    {props.children}
    <Footer>
      <nav>
        <ImageBottom src={logo} alt="Logo" />
        <Table>
          <TR>
            <TH>EMPRESA</TH>
            <TH>COMUNIDADES</TH>
            <TH>LINKS ÚTEIS</TH>
          </TR>
          <TR>
            <TD>Sobre</TD>
            <TD>Para Artistas</TD>
            <TD>Suporte</TD>
          </TR>
          <TR>
            <TD>Empregos</TD>
            <TD>Desenvolvedores</TD>
            <TD>Player da Web</TD>
          </TR>
          <TR>
            <TD>For the Record</TD>
            <TD>Publicidade</TD>
            <TD>Aplicativo móvel grátis</TD>
          </TR>
          <TR>
            <TD></TD>
            <TD>Investidores</TD>
          </TR>
          <TR>
            <TD></TD>
            <TD>Fornecedores</TD>
          </TR>          
        </Table>
        <ImageSocialMedia src={facebook} alt="Facebook" />        
        <ImageSocialMedia src={twitter} alt="Twitter" />
        <ImageSocialMedia src={instagram} alt="Instagram" /><br/><br/><br/><br/><br/>
        <H3>Legal</H3>            
        <H3>Centro de Privacidade</H3>
        <H3>Política de privacidade</H3>
        <H3>Cookies</H3>
        <H3>Sobre anúncios</H3>
        <P>
          Brasil<br/>
          2021 Spotify AB
        </P>
      </nav>
      
    </Footer>    
  </Container>;
}

export default page;
