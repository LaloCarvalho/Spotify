import React from 'react'
import { Link } from 'react-router-dom';
import Page from '../../components/page';
import { playLists } from './dados';
import { Container, H1, Img, Title } from './styles';

const OucaGratis: React.FC = () => {
    return (
        <Page>
            <Container>
                <Title>
                    Top 3 da Semana.
                </Title>
                {mostrarLists()}
            </Container>
        </Page>

    )
}
export default OucaGratis;

function mostrarLists(){
    const res = playLists.map((p) => {
        return (
            <Link to={`/oucaGratis/${p.id}`}>
                <H1>{p.nome}</H1>
                <Img src={p.capa} />
            </Link>
        )


    })
    return (
        res
    )
}
