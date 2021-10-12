import Pop from './assets/imagens/pop.png';
import Electronic from './assets/imagens/electronic.png';
import Rock from './assets/imagens/rock.png';

export const playLists = [
    {
        id: 0,
        nome: 'Pop',
        capa: Pop,
        musicas: [
            {
                id: 1,
                capa: Pop,
                estilo:'Pop',
                nome: "Ê boi ê boi",
                url: "",
                descricao:'alguma coisa vai fica aqui',
            }, 
            {
                id: 2,
                nome: "",
                url: ""
            },
            {
                id: 3,
                nome: "",
                url: ""
            }
        ]
    },
    {
        id: 1,
        nome: 'Electronic',
        capa: Electronic,
        musicas: [
            {
                id: 1,
                capa: Electronic,
                estilo:'Electronic',
                nome: "Ê boi ê boi",
                url: "",
                descricao:'alguma coisa vai fica aqui',
            }, 
            {
                id: 2,
                nome: "",
                url: ""
            },
            {
                id: 3,
                nome: "",
                url: ""
            }
        ]
    }, {
        id: 2,
        nome: 'Rock',
        capa: Rock,
        musicas: [
            {
                id: 1,
                capa: Rock,
                estilo:'Rock',
                nome: "Ê boi ê boi",
                url: "",
                descricao:'alguma coisa vai fica aqui',
            }, 
            {
                id: 2,
                nome: "",
                url: ""
            },
            {
                id: 3,
                nome: "",
                url: ""
            }
        ]
    }
]
