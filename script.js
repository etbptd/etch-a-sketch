const container = document.getElementById("sketch-container");

let gridTotal = prompt("Enter the number of cells you want", '5');

function makeRows(rows, columns) {

	container.style.setProperty('--grid-rows', rows);
	container.style.setProperty('--grid-cols', columns);

	for (i = 0; i < (rows * columns); i++) {
		let cell = document.createElement('div');
		container.appendChild(cell).className = 'grid-item';
	};
};

makeRows(gridTotal, gridTotal);

function colorChange(e) {
	this.classList.add('sketched');
}

const cells = document.querySelectorAll('.grid-item');
cells.forEach(cell => cell.addEventListener('mouseover', colorChange));

const clearButton = document.querySelector('.clear-button');
clearButton.addEventListener('click', (e) => {
	cells.forEach(cell => cell.classList.remove('sketched'));
})

// keys.forEach(key => key.addEventListener('transitionend', removeTransition));