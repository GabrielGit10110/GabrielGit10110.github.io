// chamada das funcoes
import { getDate, configureClose, configureOpen, renderizarProjetos, Projeto } from './DOM.ts';


document.addEventListener('DOMContentLoaded', () => {

    const projeto: Projeto[] = [
        {
            link: "https://github.com/GabrielGit10110/Whatsapp-Bot",
            imagem: "https://images.emojiterra.com/google/noto-emoji/unicode-16.0/color/1024px/1f4e6.png",
            titulo: "Whatsapp Chat-Bot",
            descricao: "Customer chat-bot"
        },
        {
            link: "https://www.google.com",
            imagem: "images/wip.png",
            titulo: "Work in progress...",
            descricao: "Project description"
        },
        {
            link: "https://www.google.com",
            imagem: "images/wip.png",
            titulo: "Work in progress...",
            descricao: "Project description"
        },
        {
            link: "https://www.google.com",
            imagem: "images/wip.png",
            titulo: "Work in progress...",
            descricao: "Project description"
        }
    ];

    renderizarProjetos(projeto, 'projetos-container');

    // atualiza o ano
    getDate();

    // se detectar o click em dos frames, abrir o modal
    configureOpen();

    // se detectar o click no 'ok', chamar funcao 'closePup'
    configureClose();

});
