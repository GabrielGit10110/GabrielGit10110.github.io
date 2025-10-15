// chamada das funcoes
import { getDate, configureClose, configureOpen, renderizarProjetos } from './DOM.js';

document.addEventListener('DOMContentLoaded', () => {


	const projetos = [{
		link: "https://github.com/GabrielGit10110/Whatsapp-Bot",
		imagem: "https://images.emojiterra.com/google/noto-emoji/unicode-16.0/color/1024px/1f4e6.png",
		titulo: "Whatsapp Chat-Bot",
		descricao: "Customer chat-bot"
	},
	{
		link: "https://github.com/GabrielGit10110/SistemaComandas-Padaria",
		imagem: "https://assets.streamlinehq.com/image/private/w_512,h_512,ar_1/f_auto/v1/icons/1/baguette-bread-syo5f4koyde63sb6ekbr65.png/baguette-bread-vt3bceicnf012eas278j17g.png?_a=DATAg1XyZAA0",
		titulo: "Bakery Order System",
		descricao: "Bakery Automation"
	},
	{
		link: "https://github.com/GabrielGit10110/ListaDeLogs",
		imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0WmQ7IKDZNup4t5J03lBeKnUHhGpQDJHMkg&s",
		titulo: "Circular Log Buffer",
		descricao: "Log Register and Reader"
	},
	{
		link: "https://github.com/GabrielGit10110/PhoneBookSystem",
		imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4JbAKrqS-_y4-UJh1xSEXsGR9O2OgFDX5Zw&s",
		titulo: "PhoneBook System",
		descricao: "Phonebook Automation"
	}]
	;

	renderizarProjetos(projetos, 'projetos-container');

	// atualiza o ano
	getDate();

	// se detectar o click em dos frames, abrir o modal
	configureOpen();

	// se detectar o click no 'ok', chamar funcao 'closePup'
	configureClose();

});
