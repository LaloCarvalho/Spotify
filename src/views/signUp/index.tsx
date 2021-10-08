import React from 'react'
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
import { Checkbox} from '@material-ui/core';

const SignUp: React.FC = () => {

  return (
    <Page>
      <Container>
        <Subtitle>
          Inscreva-se grátis e comece a curtir.
        </Subtitle>
        <ButtonFacebook>Inscreva-se com o Facebook</ButtonFacebook>

        <TextInput id="outlined-basic" label="Email" variant="outlined" /><br /><br />
        <TextInput id="outlined-basic" label="Confirme o Email" variant="outlined" /><br /><br />
        <TextInput id="outlined-basic" label="Senha" variant="outlined" /><br /><br />
        <TextInput id="outlined-basic" label="Apelido" variant="outlined" /><br />
        <P>Data de Nascimento:</P>
        <TextDate id="outlined-basic" label="Dia" variant="outlined" />
        <Dropdown
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
        </Dropdown>
        <TextDate id="outlined-basic" label="Ano" variant="outlined" />
        <P>Gênero:</P>
        <Check
          control={<Checkbox name="checkedA" />}
          label="Masculino"
        />
        <Check
          control={<Checkbox name="checkedA" />}
          label="Feminino"
        />
        <Check
          control={<Checkbox name="checkedA" />}
          label="Não Binário"
        /><br />
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
        <Button>Inscrever-se</Button>
        <P3>Já tem uma conta? <SublinhadoVerdeMaior>Faça login</SublinhadoVerdeMaior>.</P3>
      </Container>
    </Page>
  )
}

export default SignUp;
