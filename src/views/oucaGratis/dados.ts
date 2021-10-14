import imagenPop from './assets/imagens/Pop.jpg';
import imagenElectronic from './assets/imagens/Eletronic.jpg';
import imagenRock from './assets/imagens/Rock.jpg';

export const playLists = [
    {
        id: 0,
        nome: 'Pop',
        capa: imagenPop,
        musicas: [
            {
                id: 1,
                capa: imagenPop,
                artista:'juao',
                estilo:'Pop',
                musica:"./assets/musicas/STAY .mp3",
                nome: "Ê boi ê boi",
                descricao:'alguma coisa vai fica aqui',
            }, 
            {
                id: 2,
                artista:'juao2',
                nome: "Ê boi ê boi",
                descricao:'alguma coisa vai fica aqui',
                musica:"./assets/musicas/STAY .mp3",

            },
        ]
    },
    {
        id: 1,
        nome: 'Electronic',
        capa: imagenElectronic,
        musicas: [
            {
                id: 1,
                capa: imagenElectronic,
                estilo:'Electronic',
                artista:'joao3',
                nome: "Ê boi ê boi",
                url: "",
                descricao:'alguma coisa vai fica aqui',
                musica:"./assets/musicas/STAY .mp3",

            }, 
            {
                id: 2,
                artista:'joao4',
                nome: "Ê boi ê boi",
                url: "",
                descricao:'alguma coisa vai fica aqui',
                musica:"./assets/musicas/STAY .mp3",

            },
        ]
    }, {
        id: 2,
        nome: 'Rock',
        capa: imagenRock,
        musicas: [
            {
                id: 1,
                capa: imagenRock,
                estilo:'Rock',
                artista:'joao5',
                nome: "Ê boi ê boi",
                url: "",
                descricao:'alguma coisa vai fica aqui',
                musica:"./assets/musicas/STAY .mp3",

            }, 
        ]
    }
]
