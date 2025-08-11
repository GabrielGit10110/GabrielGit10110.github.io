// Onde o layout sera manipulado

// Pegar a data atual e modificar o html
export function getDate() {
	const dataAtual: HTMLElement | null = document.querySelector('.ano');

	if (dataAtual) {
		dataAtual.textContent = getYear().toString();
	} else {
		console.log("elemento '.ano' não encontrado...");
	}

}

const getYear = () => {
	const year: Date = new Date();

	return year.getFullYear();
}

let popupWindow: HTMLElement | null = document.getElementById('project-popup');
const pageBody: HTMLBodyElement = document.body as HTMLBodyElement;

// Definindo a interface para o tipo Projeto
export interface Projeto {
	link: string;
	imagem: string;
	titulo: string;
	descricao: string;
}


// funcao para fechar o popup
export function configureClose() {
	const btnFechar: HTMLElement | null = document.getElementById("popup-CloseBtn");

	if (btnFechar) {
		btnFechar.addEventListener('click', closePopup);
	} else {
		console.log("objeto não encontrado...");
	}

}

export function criarProjeto(projeto: Projeto): string {
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

export function renderizarProjetos(projeto: Projeto[], containerId: string): void {
	const container: HTMLElement | null = document.getElementById(containerId);

	if (container) {
		container.innerHTML = projeto.map(criarProjeto).join('');

	} else {
		console.log("container não encontrado");
	}
}


export function configureOpen() {
	const projectsList: HTMLElement | null = document.getElementById("projetos-container");

	if (projectsList) {
		projectsList.addEventListener('click', openPopup);
	} else {
		console.log("objeto não encontrado...");
	}
}

const closePopup = (): void => {
	if (!popupWindow) {
		throw new Error('Elemento project-popup não encontrado');
	}
	popupWindow.classList.remove('active');
	pageBody.classList.remove('active');
}

const openPopup = (): void => {
	if (!popupWindow) {
		throw new Error('Elemento project-popup não encontrado');
	}
	popupWindow.classList.add('active');
	pageBody.classList.add('active');
}
