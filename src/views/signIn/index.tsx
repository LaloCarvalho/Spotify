import React from 'react'
import Page from '../../components/page';
import {
    ButtonFacebook, ButtonGoogle, ButtonApple,Container, TextInput, H1, Linha, ButtonEntrar, H2,
  } from './styles';

const SignIn: React.FC = () => {


    return (
        <Page>
            <Container>
            <H2>Para continuar, faça login no Spotify.</H2>
            <ButtonFacebook>Continua com Facebook</ButtonFacebook>
            <ButtonGoogle>Continua com Google</ButtonGoogle>
            <ButtonApple>Continua com o Apple</ButtonApple>
            <Linha>ou</Linha>
            <H1>Endereço de e-mail ou nome de usuário</H1>
            <TextInput id="outlined-basic" label="Email ou Nome de Usuario" variant="outlined" /><br /><br />
            <H1>Senha</H1>
            <TextInput id="outlined-basic" label="Informe sua Senha" variant="outlined" /><br /><br />
            <u>Esqueceu sua Senha ?</u>
            <ButtonEntrar>Entrar</ButtonEntrar>
            <u></u>
            <H2>Não tem uma conta?</H2>
            <ButtonApple>Inscrever-se no Sportify</ButtonApple>
            </Container>
        </Page>
    )
}
export default SignIn;