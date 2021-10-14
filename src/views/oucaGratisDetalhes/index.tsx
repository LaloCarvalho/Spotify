import Page from "../../components/page";
import { useParams } from "react-router-dom";
import { playLists } from "../oucaGratis/dados";
import { Container, H1, Img} from "./styles";
import ReactAudioPlayer from "react-audio-player";
import { useEffect } from "react";
 
type PlaylistParams = {
  id: string;
  descricao: string;
  capa: string;
};

export default function OucaGratisDetalhes() {
  const { id } = useParams<PlaylistParams>();
  const playlistEncontrada = playLists.find((p) => p.id === parseInt(id));
  var songs = ['/Atomic Music.mp3','/STAY .mp3','/Linkin Park.mp3']; 

  useEffect(() => {
    console.log(playlistEncontrada);
  }, [])

  return (
    <Page>
      <Container>
      <H1>
          Melhores musicas de :{" "}
          {playlistEncontrada?.musicas.map((musicas) => (
            <span key={musicas.id}>{musicas.estilo}</span>
          ))}
        </H1>
        <ReactAudioPlayer src={songs[parseInt(id, 10)]} autoPlay controls />
        <br />
        {playlistEncontrada?.musicas.map((musica) => (
          <Img src={musica.capa} />
        ))}
      </Container>
    </Page>
  );
}
