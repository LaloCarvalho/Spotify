import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Page from '../../components/page';
import { Button, Container, SubTitle, Title } from './styles';



const Home: React.FC = () => {
  
  return (
      <Page>
        <Container>
        <Title>Escutar muda <br/>tudo</Title>
        <SubTitle>Milhões de músicas e podcasts para explorar. E nem precisa de cartão de crédito.</SubTitle>
        <Button>BAIXE O SPOTIFY FREE</Button>
      </Container>
      </Page>
  )
}

export default Home;
