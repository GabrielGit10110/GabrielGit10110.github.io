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
const pageBody = document.body

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
    // Se for um projeto funcional (não WIP) e tiver link, adiciona <a>
    if (projeto.titulo !== 'Work in progress...' && projeto.link) {
        return `
        <a href="${projeto.link}" target="_blank" class="project-link">
            <div class="frame-quadrado functional-project">
                <div class="container-imagemProjeto">
                    <img src="${projeto.imagem}" alt="PLACEHOLDER" class="projeto" />
                </div>
                <div class="container-textProject">
                    <h2>${projeto.titulo}</h2>
                    <p>${projeto.descricao}</p>
                </div>
            </div>
        </a>
        `;
    } else {
        // Se for WIP, mantém como div clicável
        return `
        <div class="frame-quadrado wip-project" data-wip="true">
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
}

export function configureOpen() {
    const projects = document.getElementById("projetos-container");

    if (projects) {
        projects.addEventListener('click', function(event) {
            // Encontrar o elemento do projeto clicado
            const projectElement = event.target.closest('.frame-quadrado');
            
            // Verificar se é um projeto WIP (tem o atributo data-wip)
            if (projectElement && projectElement.hasAttribute('data-wip')) {
                openPopup();
                event.preventDefault();
                event.stopPropagation();
            }
            // Se for projeto funcional (dentro de <a>), o link abre normalmente
        });
    } else {
        console.log("objeto não encontrado...");
    }
}
export function renderizarProjetos(projetos, containerId) {
	const container = document.getElementById(containerId);
	container.innerHTML = projetos.map(criarProjeto).join('');
}

const closePopup = () => {
	popupWindow.classList.remove('active');
	pageBody.classList.remove('active');
}

const openPopup = () => {
	popupWindow.classList.add('active');
	pageBody.classList.add('active');
}
