import * as rdl from 'readline/promises';

function popupMessage() {
	alert("VOCÊ CLICOU NO BOTAO...");
}

function getClick() {
	const tile: HTMLElement = document.getElementById("saber") as HTMLElement;

	if (tile) {
		tile.addEventListener('click', popupMessage);
	} else {
		console.log("tile não foi encontrado...");
	}

}

async function main() {

	getClick();

}

main().catch(console.error)
