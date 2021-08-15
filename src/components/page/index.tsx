import React from 'react';
import {
  Container,
  Header,
  Footer,
  LinkHome,
  LinksRight,
  ImageTop,
  ImageBottom,
  Table,
  TR,
  TH,
  TD,
  P,
  ImageSocialMedia,
  H3
} from './styles';
import logo from './assets/spotify.svg';
import instagram from './assets/facebook.svg';
import facebook from './assets/instagram.svg';
import twitter from './assets/twitter.svg';

const page: React.FC = ({ children }) => {
  return <Container>
    <Header>
      <LinkHome to="/"><ImageTop src={logo} alt="Logo" /></LinkHome>
      <LinksRight to="/">Premium</LinksRight>
      <LinksRight to="/support">Suporte</LinksRight>
      <LinksRight to="/">Baixar</LinksRight>
      <LinksRight to="/">|</LinksRight>
      <LinksRight to="/signUp">Inscrever-se</LinksRight>
      <LinksRight to="/">Entrar</LinksRight>
    </Header>
    {children}
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
        <ImageSocialMedia src={instagram} alt="Instagram" /><br /><br /><br /><br /><br />
        <H3>Legal</H3>
        <H3>Centro de Privacidade</H3>
        <H3>Política de privacidade</H3>
        <H3>Cookies</H3>
        <H3>Sobre anúncios</H3>
        <P>
          Brasil<br />
          2021 Spotify AB
        </P>
      </nav>

    </Footer>
  </Container>;
}

export default page;
