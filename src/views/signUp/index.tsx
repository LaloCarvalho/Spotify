import React, { useState } from 'react'
import {
  SublinhadoVerdeMaior,
  SublinhadoVerdeMenor,
  Button,
  ButtonFacebook,
  Check,
  Container,
  Dropdown,
  P,
  P2,
  P3,
  Subtitle,
  TextDate,
  TextInput,
} from './styles';
import Page from '../../components/page';
import { Checkbox, FormControl, FormControlLabel, Radio, RadioGroup } from '@material-ui/core';

const SignUp: React.FC = () => {
  const [email, setEmail] = useState<string>()
  const [confirmarEmail, setConfirmarEmail] = useState<boolean>()
  const [senha, setSenha] = useState<string>()
  const [apelido, setApelido] = useState<string>()
  const [diaNascimento, setDiaNascimento] = useState<string>()
  const [mesNascimento, setMesNascimento] = useState<string>()
  const [anoNascimento, setAnoNascimento] = useState<string>()
  const [genero, setGenero] = useState<string>()

  function handleSubmit() {
    const data = {
      email,
      confirmarEmail,
      senha,
      apelido,
      nascimento: {
        diaNascimento,
        mesNascimento,
        anoNascimento
      },
      genero
    }
    console.log(data)
  }

  return (
    <Page>
      <Container>
        <Subtitle>Inscreva-se grátis e comece a curtir.</Subtitle>
        <ButtonFacebook>Inscreva-se com o Facebook</ButtonFacebook>

        <TextInput label="Email" variant="outlined" onChange={e => setEmail(String(e.target.value))} /><br /><br />
        <TextInput label="Confirme o Email" variant="outlined" onChange={e => setConfirmarEmail(String(email) === String(e.target.value) ? true : false)} /><br /><br />
        <TextInput label="Senha" variant="outlined" onChange={e => setSenha(String(e.target.value))} /><br /><br />
        <TextInput label="Apelido" variant="outlined" onChange={e => setApelido(String(e.target.value))} /><br />
        <P>Data de Nascimento:</P>
        <TextDate label="Dia" variant="outlined" onChange={e => setDiaNascimento(String(e.target.value))} />
        <Dropdown
          native
          label="Mês"
          variant="outlined"
          placeholder="Mês"
          onChange={e => setMesNascimento(String(e.target.value))}
        >
          <option aria-label="None" value="" />
          <option value={"Janeiro"}>Janeiro</option>
          <option value={"Fevereiro"}>Fevereiro</option>
          <option value={"Março"}>Março</option>
          <option value={"Abril"}>Abril</option>
          <option value={"Maio"}>Maio</option>
          <option value={"Junho"}>Junho</option>
          <option value={"Julho"}>Julho</option>
          <option value={"Agosto"}>Agosto</option>
          <option value={"Setembro"}>Setembro</option>
          <option value={"Outubro"}>Outubro</option>
          <option value={"Novembro"}>Novembro</option>
          <option value={"Dezembro"}>Dezembro</option>
        </Dropdown>

        <TextDate label="Ano" variant="outlined" onChange={e => setAnoNascimento(String(e.target.value))}/>
        <P>Gênero:</P>
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="gender"
            defaultValue="female"
            name="radio-buttons-group"
            onChange={e => setGenero(String(e.target.value))}
          >
            <FormControlLabel value="female" control={<Radio />} label="Feminino" />
            <FormControlLabel value="male" control={<Radio />} label="Masculino" />
            <FormControlLabel value="other" control={<Radio />} label="Não-binário" />
          </RadioGroup>
        </FormControl>
        <Check
          control={<Checkbox name="checkedA" />}
          label="Não quero receber mensagens de marketing do Spotify"
        /><br />
        <Check
          control={<Checkbox name="checkedA" />}
          label="Compartilhar meus dados cadastrais com os provedores de conteúdo do Spotify para fins de marketing."
        /><br />
        <Check
          control={<Checkbox name="checkedA" />}
          label="Eu concordo com os Termos e Condições de Uso do Spotify."
        /><br />
        <P2>Para saber mais sobre como o Spotify coleta, utiliza, compartilha e protege seus dados pessoais, leia a
          <SublinhadoVerdeMenor>
            Política de Privacidade do Spotify
          </SublinhadoVerdeMenor>.
        </P2>
        <Button onClick={handleSubmit}>Inscrever-se</Button>
        <P3>Já tem uma conta? <SublinhadoVerdeMaior>Faça login</SublinhadoVerdeMaior>.</P3>
      </Container>
    </Page>
  )
}

export default SignUp;
