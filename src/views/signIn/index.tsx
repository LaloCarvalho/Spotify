import React, { useState } from 'react'
import axios from 'axios';
import Page from '../../components/page';
import { useHistory } from 'react-router';
import {
    ButtonFacebook, ButtonGoogle, ButtonApple, Container, TextInput, H1, Linha, ButtonEntrar, H2,
} from './styles';

const SignIn: React.FC = () => {

    const JSON_URL = 'http://localhost:4000/usuarios?email='
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    function handleSubmit(e: { preventDefault: () => void; }) {
        e.preventDefault()

        axios.get(JSON_URL + email)
            .then(res => {
                const user = res.data[0]

                if (user.senha !== senha) {
                    alert('Senha Inválida')
                } else {
                    localStorage.setItem('user-logged-in', JSON.stringify(user))
                }
        })
    }



    return (
        <Page>
            <Container>
                <H2>Para continuar, faça login no Spotify.</H2>
                <ButtonFacebook>Continua com Facebook</ButtonFacebook>
                <ButtonGoogle>Continua com Google</ButtonGoogle>
                <ButtonApple>Continua com o Apple</ButtonApple>
                <Linha>ou</Linha>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <H1>Endereço de e-mail ou nome de usuário</H1>
                    <TextInput id="outlined-basic" label="Email ou Nome de Usuario" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} /><br /><br />
                    <H1>Senha</H1>
                    <TextInput id="outlined-basic" label="Informe sua Senha" variant="outlined" value={senha} onChange={(e) => setSenha(e.target.value)} /><br /><br />
                    <u>Esqueceu sua Senha ?</u>
                    <ButtonEntrar>Entrar</ButtonEntrar>
                </form>
                <u></u>
                <H2>Não tem uma conta?</H2>
                <ButtonApple>Inscrever-se no Sportify</ButtonApple>
            </Container>
        </Page>
    )
}
export default SignIn;