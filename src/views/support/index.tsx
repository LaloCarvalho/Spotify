import React, { Component } from 'react'
import { Button, Container, DivBot, DivMid, DivTop, H1Bot, H3, H4, H4V2, LI, P, TableBot, TableTop, TextInput, Title, TR, UL } from './styles';
import Page from '../../components/page';

const Support: React.FC = () => {
  return (    
      <Page>
        <Container>
          <DivTop>
          <Title>Como podemos ajudar?</Title>
          <TextInput id="outlined-basic" label="Buscar" variant="outlined" /><br/><br/><br/><br/>
          <H4>Conta e pagamento</H4>            
          <H4>Opções de assinatura</H4>
          <H4>Ajuda com pagamentos</H4>
          <H4>Ajuda com a conta</H4><br/>
          <H4V2>Atualizações de Preço</H4V2>
          <H4V2>Criar ou entrar em um plano Família</H4V2>
          <H4V2>Ajuda com pagamento não efetuado</H4V2>
          <H4V2>Não consigo redefinir a senha</H4V2>
          </DivTop>
          <DivMid>
            <H3>Conta e pagamento</H3>            
            <H3>Usando o Spotify</H3>
            <H3>Ouça onde quiser</H3><br/>
            <UL>
              <LI>
                Ajuda com a conta
              </LI>
              <LI>
                Ajuda com pagamentos
              </LI>
              <LI>
                Opções de assinatura
              </LI>
              <LI>
                Premium Familiar
              </LI>
              <LI>
                Premium Duo
              </LI>
              <LI>
                Premium Universitário
              </LI>
              <LI>
                Privacidade e segurança
              </LI>
              <LI>
                Para Anunciantes
              </LI>
            </UL>
            <UL>
              <LI>
                Primeiros passos
              </LI>
              <LI>
                Playlists
              </LI>
              <LI>
                Sistema e configurações
              </LI>
              <LI>
                Solução de problemas                
              </LI>
            </UL>
            <UL>
              <LI>
                Alto-falantes
              </LI>
              <LI>
                TVs
              </LI>
              <LI>
                Carros
              </LI>
              <LI>
                Videogames
              </LI>
              <LI>
                Smartwatches
              </LI>
              <LI>
                Smart displays
              </LI>
              <LI>
                Assistentes de voz
              </LI>
            </UL>
          </DivMid>
          <DivBot>
            <H1Bot>Visite a Comunidade</H1Bot>
            <P>Tem uma pergunta? Encontre respostas na nossa <br/>Comunidade de fãs especialistas do mundo todo!</P>
            <Button>Encontrar respostas</Button>
          </DivBot>
        </Container>
      </Page>
  )
}

export default Support;
