import reggae from './assets/imagens/reggae.jpg';
import forro from './assets/imagens/forro.jpeg';
// import samba from './assets/imagens/samba.jpg';
import samba from './assets/imagens/samba.jpg';

export const playLists = [
    {
        id: 1,
        nome: 'Forro',
        capa: forro,
        musicas: [
            {
                id: 1,
                nome: "Ê boi ê boi",
                url: ""
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
        id: 2,
        nome: 'Reggae',
        capa: reggae,
        musicas: [
            {
                id: 1,
                nome: "",
                url: ""
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
        id: 3,
        nome: 'Samba',
        capa: samba,
        musicas: [
            {
                id: 1,
                nome: "",
                url: ""
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
