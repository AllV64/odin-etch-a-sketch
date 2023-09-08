function createGrid(size){
    const container = document.querySelector('#container');
    for (i = 1; i < size+1; i++){
        const row = document.createElement('div');
        row.setAttribute('id',`row${i}`);
        row.classList.add('row');
        container.appendChild(row);
        for (x = 0; x < size; x++){
        console.log(i);
           let currentRow = document.querySelector(`#row${i}`);
           const cell = document.createElement('div');
           currentRow.appendChild(cell);
        }
    }
    return 'updated';
}

let squareRoot = 4;
let cells = container.querySelectorAll('div.row > div');
if (createGrid(squareRoot) == 'updated'){
    cells = container.querySelectorAll('div.row > div');
}

cells.forEach((cell) => {
    cell.addEventListener('mouseover', () => {
        addColor(cell);
    })
});

const buttonContainer = document.querySelector('#button-container');
const invalidInput = document.createElement('div');
buttonContainer.appendChild(invalidInput);
changeGridSize = document.querySelector('button');
changeGridSize.addEventListener('click', () => {
    container.innerHTML = '';
    let userInput = prompt(`Type a number between 1 and 100`);
})

function addColor(cell){
    cell.classList.add('colored');
}