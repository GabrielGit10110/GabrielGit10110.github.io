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
