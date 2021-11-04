import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { Redirect, useParams } from 'react-router';
import { Usuario, Playlist, PlaylistMusica, Musica } from '../../utils/types';
import backward from './assets/backward.png';
import forward from './assets/forward.png';
import deleteMusic from './assets/delete.png';
import add from './assets/add.png';
import {
  Container,
  InnerContainer,
  PlaylistDiv,
  PlaylistContainer,
  Title,
  MusicaDiv,
  TextInput,
  Button,
  Image,
  TextInputMusic,
  DivNewMusic,
  CapaPlaylist
} from './styles';

const Profile: React.FC = () => {
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [canChange, setCanChange] = useState<boolean>(false);
  const [userLogged, setUserLogged] = useState<Usuario>();
  const [playlists, setPlaylists] = useState<Array<Playlist>>();
  const [filter, setFilter] = useState<string>("");
  const [playlistSelected, setPlaylistSelected] = useState<Playlist>();
  const [musicasNaPlaylist, setMusicasNaPlaylist] = useState<Array<PlaylistMusica>>();
  const [musicaAtual, setMusicaAtual] = useState<number>(0);
  const [musicaAtualDet, setMusicaAtualDet] = useState<Musica | null>(null);
  const [artista, setArtista] = useState<string>();
  const [descricao, setdescricao] = useState<string>();
  const [musica, setmusica] = useState<string>("/Atomic Music.mp3");
  const [nome, setnome] = useState<string>();
  const [estilo, setEstilo] = useState<string>();
  const [totalMusics, setTotalMusics] = useState<Array<Musica>>();
  const [addMusic, setAddMusic] = useState<boolean>(false);

  const getPlaylists = () => {
    axios.get('http://localhost:4000/playlists')
      .then(res => {
        setPlaylists(res.data);
      });
  }

  const getTotalMusics = () => {
    axios.get('http://localhost:4000/musicas')
      .then(res => {
        setTotalMusics(res.data);
      });
  }

  const getMusicsFromPlaylist = () => {
    console.log('playlistSelected');
    console.log(playlistSelected);
    if (playlistSelected) {
      axios.get(`http://localhost:4000/playlistMusica?playlistId=${playlistSelected.id}`)
        .then(res => {
          setMusicasNaPlaylist(res.data);
        });
    }
  }

  const getMusicInfo = () => {
    if (musicasNaPlaylist && musicaAtual) {
      axios.get(`http://localhost:4000/musicas/${musicasNaPlaylist[musicaAtual - 1].musicId}`)
        .then(res => {
          setMusicaAtualDet(res.data);
        });
    }
  }

  const nextSound = () => {
    if (musicasNaPlaylist && musicaAtual && musicaAtual + 1 <= musicasNaPlaylist?.length)
      setMusicaAtual(musicaAtual + 1);
    else
      setMusicaAtual(1);
  }

  const lastSound = () => {
    if (musicasNaPlaylist && musicaAtual && musicaAtual - 1 > 0)
      setMusicaAtual(musicaAtual - 1);
    else
      setMusicaAtual(musicasNaPlaylist?.length!);
  }

  useEffect(() => {
    if (playlistSelected) {
      setMusicaAtualDet(null);
      setMusicaAtual(0);
      getMusicsFromPlaylist();
    }
  }, [playlistSelected]);

  useEffect(() => {
    if (musicasNaPlaylist && musicasNaPlaylist.length > 0) {
      setMusicaAtual(1);
    }
  }, [musicasNaPlaylist]);

  useEffect(() => {
    if (musicaAtual)
      getMusicInfo();
  }, [musicaAtual]);

  useEffect(() => {
    getTotalMusics();
  }, [addMusic])

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
        </Title><br/>
        <TextInput
          id="outlined-basic"
          label="Pesquisar por playlist"
          variant="outlined"
          type="text"
          onChange={(e) => setFilter(e.target.value)} placeholder="Pesquisar"
        />
        <PlaylistContainer>
          {
            playlists && playlists?.filter(w => w.nome.toLocaleLowerCase().includes(filter.toLocaleLowerCase())).map(p => (
              <PlaylistDiv
                key={p.id}
                onClick={() => setPlaylistSelected(p)}
                isSelected={(p === playlistSelected)}
              >
                Playlist de estilo {p.nome}
                <CapaPlaylist src={p?.capa} alt="Capa da Playlist" />
              </PlaylistDiv>
            ))
          }
        </PlaylistContainer>
        {playlistSelected && (
          <div>
            <Title>
              Músicas da playlist {playlistSelected.nome}
            </Title>
            <Image src={add} onClick={() => {
              setAddMusic(true);
            }} alt="Adcionar Música a Playlist"
            />
            {addMusic &&
              <DivNewMusic>
                <TextInputMusic
                  id="outlined-basic"
                  label="Artista"
                  variant="outlined"
                  type="text"
                  onChange={(e) => setArtista(e.target.value)}
                />
                <TextInputMusic
                  id="outlined-basic"
                  label="Estilo"
                  variant="outlined"
                  type="text"
                  onChange={(e) => setEstilo(e.target.value)}
                />
                <TextInputMusic
                  id="outlined-basic"
                  label="Música"
                  variant="outlined"
                  type="text"
                  onChange={(e) => setnome(e.target.value)}
                />
                <TextInputMusic
                  id="outlined-basic"
                  label="Descrição"
                  variant="outlined"
                  type="text"
                  onChange={(e) => setdescricao(e.target.value)}
                /><br/>
                <Button onClick={() => {
                  axios.post('http://localhost:4000/musicas', {
                    artista: artista,
                    descricao: descricao,
                    musica: musica,
                    nome: nome,
                    estilo: estilo,
                  }).then(resp => {
                    axios.post('http://localhost:4000/playlistMusica', {
                      playlistId: playlistSelected.id,
                      musicId: totalMusics?.length! + 1,
                    })
                    setMusicaAtual(0);
                    setMusicaAtualDet(null);
                    
                    //getTotalMusics();
                    getMusicsFromPlaylist();
                    setAddMusic(false);
                  }).catch(error => {
                    console.log(error);
                  }).finally(() => {
                    
                  });
                }}>Adcionar Música a Playlist</Button>
              </DivNewMusic>}
            {musicaAtualDet && (
              <MusicaDiv>
                <h2>Música {musicaAtualDet.nome} por {musicaAtualDet.artista} ({musicaAtual}/{musicasNaPlaylist?.length})</h2>
                <Image src={backward} onClick={lastSound} alt="Voltar" />
                <ReactAudioPlayer src={musicaAtualDet.musica} controls />
                <Image src={forward} onClick={nextSound} alt="Avançar" />
                <Image src={deleteMusic} onClick={() => {
                  axios.delete('http://localhost:4000/playlistMusica/' + musicaAtualDet.id)
                  .then(resp => {
                    axios.delete('http://localhost:4000/musicas/' + musicaAtualDet.id)
                    setMusicaAtual(0);
                    setMusicaAtualDet(null);
                    getMusicsFromPlaylist();
                  }).catch(error => {
                    console.log(error);
                  });
                }} alt="Excluir Música da Playlist" />
              </MusicaDiv>
            )}
          </div>
        )}
      </InnerContainer>
    </Container>
  );
}

export default Profile;