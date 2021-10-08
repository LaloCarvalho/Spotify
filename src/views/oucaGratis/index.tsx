import React from 'react'
import { Link } from 'react-router-dom';
import Page from '../../components/page';
import { playLists } from './dados';
import { Container, Img, Title } from './styles';

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

function mostrarLists(): React.ReactNode {
    const res = playLists.map((p) => {
        return (
            <Link to={`/oucaGratis/${p.id}`}>
                <Img src={p.capa} />
            </Link>
        )


    })
    return (
        res
    )
}
