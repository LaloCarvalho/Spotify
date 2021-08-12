import React, { Component } from 'react'
import { Button, ButtonFacebook, Container, Subtitle, TextDate, TextInput, Traco } from './styles';
import TextField from '@material-ui/core/TextField';
import Page from '../../components/page';
import logo from './assets/spotify.svg';
import { Image } from './styles';
import { Checkbox, FormControlLabel, Select } from '@material-ui/core';

const SignUp: React.FC = () => {

  return (
    <Page>
      <Container>
        <Image src={logo} alt="Logo" />
        <Subtitle>
          Inscreva-se grátis e comece a curtir.
        </Subtitle>
        <ButtonFacebook>Inscreva-se com o Facebook</ButtonFacebook>
        <Traco></Traco>
        <TextInput id="outlined-basic" label="Email" variant="outlined" /><br/><br/>
        <TextInput id="outlined-basic" label="Confirme o Email" variant="outlined" /><br/><br/>
        <TextInput id="outlined-basic" label="Senha" variant="outlined" /><br/><br/>
        <TextInput id="outlined-basic" label="Apelido" variant="outlined" /><br/>
        <p>Data de Nascimento:</p>
        <TextDate id="outlined-basic" label="Dia" variant="outlined" />
        <Select
          native
          label="Mês"
          variant="outlined"
          placeholder="Mês"
        >
          <option aria-label="None" value="" />
          <option value={10}>Janeiro</option>
          <option value={20}>Favereiro</option>
          <option value={30}>Março</option>
          <option value={10}>Abril</option>
          <option value={20}>Maio</option>
          <option value={30}>Junho</option>
          <option value={10}>Julho</option>
          <option value={20}>Agosto</option>
          <option value={30}>Setembro</option>
          <option value={10}>Outubro</option>
          <option value={20}>Novembro</option>
          <option value={30}>Dezembro</option>
        </Select>
        <TextDate id="outlined-basic" label="Ano" variant="outlined" />
        <p>Gênero:</p>
        <FormControlLabel
        control={<Checkbox name="checkedA" />}
        label="Masculino"
      />
      <FormControlLabel
        control={<Checkbox name="checkedA" />}
        label="Feminino"
      />
      <FormControlLabel
        control={<Checkbox  name="checkedA" />}
        label="Não Binário"
      /><br/>
      <FormControlLabel
        control={<Checkbox  name="checkedA" />}
        label="Não quero receber mensagens de marketing do Spotify"
      /><br/>
      <FormControlLabel
        control={<Checkbox  name="checkedA" />}
        label="Compartilhar meus dados cadastrais com os provedores de conteúdo do Spotify para fins de marketing."
      /><br/>
      <FormControlLabel
        control={<Checkbox  name="checkedA" />}
        label="Eu concordo com os Termos e Condições de Uso do Spotify."
      /><br/>
      <p>Para saber mais sobre como o Spotify coleta, utiliza, compartilha e protege seus dados pessoais, leia a Política de Privacidade do Spotify.</p>
      <Button>Inscrever-se</Button>
      <p>Já tem uma conta? Faça login.</p>
      </Container>
    </Page>
  )
}

export default SignUp;
