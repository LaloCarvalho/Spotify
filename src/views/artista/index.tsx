import { useParams } from 'react-router-dom'
import { playLists } from '../oucaGratis/dados'
import { Container, H1, Img} from './styles'

type PlaylistParams = {
    id: string
    descricao:string
    capa:string
}


export default function OucaGratisDetalhes() {
    const { id } = useParams<PlaylistParams>()
    const playlistEncontrada = playLists.find(p => p.id === parseInt(id))
    
    return (
    
        <Container>
            <H1>Melhores Artistas de : {playlistEncontrada?.musicas.map(musicas=><>{musicas.estilo}</>)}</H1>
            {playlistEncontrada?.musicas.map(musica => <Img src={musica.capa} />)}
        </Container>
        
    )
}
