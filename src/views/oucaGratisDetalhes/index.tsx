import Page from '../../components/page';
import { useParams } from 'react-router-dom'
import { playLists } from '../oucaGratis/dados'
import { Container, H1, Img, LinksRight } from './styles';

type PlaylistParams = {
    id: string
    descricao:string
    capa:string
}


export default function OucaGratisDetalhes() {
    const { id } = useParams<PlaylistParams>()
    const playlistEncontrada = playLists.find(p => p.id === parseInt(id))

    
    

    return (
        <Page>
        <Container>
            <H1>Melhores Artistas de : {playlistEncontrada?.musicas.map(musicas=><>{musicas.estilo}</>)}</H1>
            <LinksRight to="/artista">Antoninho dos Teclados</LinksRight><br /><br />
            <LinksRight to="/artista">Adalberto da Sanfona</LinksRight><br /><br />
            <LinksRight to="/artista">João de Baixo</LinksRight>
            {playlistEncontrada?.musicas.map(musica => <Img src={musica.capa} />)}
        </Container>
        </Page>
    )
}
