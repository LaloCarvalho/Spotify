import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { Redirect, useParams } from 'react-router';
import { Usuario, Playlist } from '../../utils/types';
import {
  Container,
  InnerContainer,
  PlaylistDiv,
  PlaylistContainer,
  Title,
  Musica,
  TextInput,
} from './styles';

const Profile: React.FC = () => {
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [canChange, setCanChange] = useState<boolean>(false);
  const [userLogged, setUserLogged] = useState<Usuario>();
  const [playlists, setPlaylists] = useState<Array<Playlist>>();
  const [filter, setFilter] = useState<string>("");

  const getPlaylists = () => {
    axios.get('http://localhost:4000/playlists')
      .then(res => {
        setPlaylists(res.data);
      });
  }

  useEffect(() => {
    let usuarioLogado = localStorage.getItem('user-logged-in');
    if (usuarioLogado) {
      setIsLogged(true);
      setUserLogged(JSON.parse(usuarioLogado));
      setCanChange(true);
      getPlaylists();
    }
  }, []);

  if (!isLogged && canChange) {
    return (<Redirect to='/signin' />);
  }

  return (
    <Container isLogged={!!userLogged}>
      <InnerContainer>
        <Title>
          Playlists do {userLogged?.nome}
        </Title>
        <TextInput
            id="outlined-basic"
            label="Pesquisar música"
            variant="outlined"
            type="text" 
            onChange={(e) => setFilter(e.target.value)} placeholder="Pesquisar"
          />
        <PlaylistContainer>
          {
            playlists && playlists?.map(p => (
              <PlaylistDiv key={p.id}>
                Playlist Id {p.id} de nome {p.nome} com a capa {p.capa}
                {                  
                  p.musicas && p.musicas.filter(w => w.nome.includes(filter)).map((m) =>
                    <Musica>
                      {m.nome} - {m.artista}<br/>
                      <ReactAudioPlayer src={m.musica} controls /> 
                    </Musica>
                  )
                }
              </PlaylistDiv>
            ))
          }
        </PlaylistContainer>
      </InnerContainer>
    </Container>
  );
}

export default Profile;