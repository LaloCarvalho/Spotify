import React from 'react'
import Page from '../../components/page';
import { Container,LinksRight,  SubTitle, Title } from './styles';



const Home: React.FC = () => {
  
  return (
      <Page>
        <Container>
        <Title>Escutar muda <br/>tudo</Title>
        <SubTitle>Milhões de músicas e podcasts para explorar. E nem precisa de cartão de crédito.</SubTitle>
        <LinksRight to="/oucaGratis">Ouça Gratis</LinksRight>
      </Container>
      </Page>
  )
}

export default Home;
