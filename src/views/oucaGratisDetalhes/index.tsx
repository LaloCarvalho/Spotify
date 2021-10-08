import React from 'react'
import { useParams } from 'react-router-dom'
import { playLists } from '../oucaGratis/dados'

type PlaylistParams = {
    id: string
}

export default function OucaGratisDetalhes() {
    const { id } = useParams<PlaylistParams>()
    const playlistEncontrada = playLists.find(p => p.id === parseInt(id))

    return (
        <div>
            <h1>{playlistEncontrada?.nome}</h1>
            {playlistEncontrada?.musicas.map(musica => <h2>{musica.nome}</h2>)}
        </div>
    )
}