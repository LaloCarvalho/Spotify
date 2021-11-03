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
}

export interface Playlist {
    capa: string,
    id: number,
    musicas: Array<Musica>,
    nome: string,
}
