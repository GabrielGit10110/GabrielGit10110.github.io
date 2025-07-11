// chamada das funcoes
import { getDate, configureClose, configureOpen, renderizarProjetos } from './DOM.js';

document.addEventListener('DOMContentLoaded', () => {


	const projetos = Array(4).fill({
		link: "https://www.google.com",
		imagem: "images/wip.png",
		titulo: "Work in progress...",
		descricao: "Project description"
	});

	renderizarProjetos(projetos, 'projetos-container');

	// atualiza o ano
	getDate();

	// se detectar o click em dos frames, abrir o modal
	configureOpen();

	// se detectar o click no 'ok', chamar funcao 'closePup'
	configureClose();

});
