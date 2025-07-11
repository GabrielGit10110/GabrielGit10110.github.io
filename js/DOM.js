// Onde o layout sera manipulado

// Pegar a data atual e modificar o html
export function getDate() {
	const dataAtual = document.querySelector('.ano');

	if (dataAtual) {
		dataAtual.textContent = getYear();
	} else {
		console.log("elemento '.ano' não encontrado...");
	}

}

const getYear = () => {
	const year = new Date();

	return year.getFullYear();
}

let popupWindow = document.getElementById('project-popup');
// funcao para fechar o popup
export function configureClose() {
	const btnFechar = document.getElementById("popup-CloseBtn");

	if (btnFechar) {
		btnFechar.addEventListener('click', closePopup);
	} else {
		console.log("objeto não encontrado...");
	}

}

export function criarProjeto(projeto) {
	return `
    <div class="frame-quadrado">
      <div class="container-imagemProjeto">
          <img src="${projeto.imagem}" alt="PLACEHOLDER" class="projeto" />
      </div>
      <div class="container-textProject">
        <h2>${projeto.titulo}</h2>
        <p>${projeto.descricao}</p>
      </div>
    </div>
  `;
}

export function renderizarProjetos(projetos, containerId) {
	const container = document.getElementById(containerId);
	container.innerHTML = projetos.map(criarProjeto).join('');
}

export function configureOpen() {
	const projects = document.getElementById("projetos-container");

	if (projects) {
		projects.addEventListener('click', openPopup);
	} else {
		console.log("objeto não encontrado...");
	}
}

const closePopup = () => {
	popupWindow.classList.remove('active');
}

const openPopup = () => {
	popupWindow.classList.add('active');
}
