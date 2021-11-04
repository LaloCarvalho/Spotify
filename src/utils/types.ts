export interface Usuario {
    id: number,
    nome: string,
    email: string,
    senha: string,
}

export interface Musica {
    artista: string,
    descricao: string,
    id: number,
    musica: string,
    nome: string,
    estilo: string,
}

export interface Playlist {
    capa: string,
    id: number,
    nome: string,
}

export interface PlaylistMusica {
    id: number,
    playlistId: number,
    musicId: number,
}
