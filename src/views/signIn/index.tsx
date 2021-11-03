import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Page from '../../components/page';
import { useHistory, Redirect } from 'react-router';
import {
  ButtonFacebook,
  ButtonGoogle,
  ButtonApple,
  Container,
  TextInput,
  H1,
  Linha,
  ButtonEntrar,
  H2,
} from './styles';

const SignIn: React.FC = () => {

  const JSON_URL = 'http://localhost:4000/usuarios?email='
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [isLogged, setIsLogged] = useState<boolean>(false);

  function handleSubmit(e: { preventDefault: () => void; }) {
    e.preventDefault();
    axios.get(JSON_URL + email)
      .then(res => {
        const user = res.data[0];
        console.log(user);

        if (user.senha !== senha) {
          alert('Senha Inválida');
        } else {
          localStorage.setItem('user-logged-in', JSON.stringify(user));
          setIsLogged(true);
        }
      })
  }

  useEffect(() => {
    if (localStorage.getItem('user-logged-in'))
      setIsLogged(true);
  }, []);

  if (isLogged) {
    return (<Redirect to='/profile'/>);
  }

  return (
    <Page>
      <Container>
        <H2>
          Para continuar, faça login no Spotify.
        </H2>
        <ButtonFacebook>Continuar com Facebook</ButtonFacebook>
        <ButtonGoogle>Continuar com Google</ButtonGoogle>
        <ButtonApple>Continuar com o Apple</ButtonApple>
        <Linha>ou</Linha>
        <form onSubmit={(e) => handleSubmit(e)}>
          <TextInput
            id="outlined-basic"
            label="Email ou Nome de Usuario"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br /><br />
          <TextInput
            id="outlined-basic"
            label="Informe sua Senha"
            variant="outlined"
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <br /><br />
          <u>Esqueceu sua Senha ?</u>
          <ButtonEntrar>Entrar</ButtonEntrar>
        </form>
        <u></u>
        <H2>Não tem uma conta?</H2>
        <ButtonApple>Inscrever-se no Spotify</ButtonApple>
      </Container>
    </Page>
  )
}
export default SignIn;